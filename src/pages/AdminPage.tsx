import React, { useState, useEffect } from 'react';
import '../styles/fancy.css';

const API_BASE_URL = 'http://localhost:3001';

interface TimeSlot {
 id: string;
 date: string;
 time: string;
 protocol: 'vo2max' | 'runwalk';
 price: number;
 available: boolean;
 created_at: string;
}

interface Booking {
 id: string;
 slotId: string;
 protocol: string;
 customer: {
 firstName: string;
 lastName: string;
 email: string;
 phone?: string;
 };
 date: string;
 time: string;
 price: number;
 status: 'pending' | 'confirmed' | 'cancelled' | 'expired';
 created_at: string;
 slot?: TimeSlot;
}

interface Stats {
 total_bookings: number;
 confirmed_bookings: number;
 pending_bookings: number;
 cancelled_bookings: number;
 total_slots: number;
 available_slots: number;
 total_revenue: number;
}

const AdminPage: React.FC = () => {
 const [activeTab, setActiveTab] = useState<'dashboard' | 'slots' | 'bookings'>('dashboard');
 const [slots, setSlots] = useState<TimeSlot[]>([]);
 const [bookings, setBookings] = useState<Booking[]>([]);
 const [stats, setStats] = useState<Stats | null>(null);
 const [loading, setLoading] = useState(false);
 
 // États pour la création de créneaux
 const [newSlot, setNewSlot] = useState({
 date: '',
 time: '',
 protocol: 'vo2max' as 'vo2max' | 'runwalk',
 price: 150
 });

 // Charger les données
 const loadStats = async () => {
 try {
 const response = await fetch(`${API_BASE_URL}/api/admin/stats`);
 const data = await response.json();
 if (data.success) setStats(data.data);
 } catch (error) {
 console.error('Erreur chargement stats:', error);
 }
 };

 const loadSlots = async () => {
 try {
 const response = await fetch(`${API_BASE_URL}/api/admin/slots`);
 const data = await response.json();
 if (data.success) setSlots(data.data);
 } catch (error) {
 console.error('Erreur chargement créneaux:', error);
 }
 };

 const loadBookings = async () => {
 try {
 const response = await fetch(`${API_BASE_URL}/api/bookings`);
 const data = await response.json();
 if (data.success) setBookings(data.data);
 } catch (error) {
 console.error('Erreur chargement réservations:', error);
 }
 };

 useEffect(() => {
 loadStats();
 loadSlots();
 loadBookings();
 }, []);

 // Créer un nouveau créneau
 const handleCreateSlot = async (e: React.FormEvent) => {
 e.preventDefault();
 setLoading(true);

 try {
 console.log('Données envoyées:', newSlot);
 
 const response = await fetch(`${API_BASE_URL}/api/admin/slots`, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(newSlot)
 });

 console.log('Réponse serveur:', response.status, response.statusText);

 if (response.ok) {
 const result = await response.json();
 console.log('Créneau créé:', result);
 await loadSlots();
 await loadStats();
 setNewSlot({ date: '', time: '', protocol: 'vo2max', price: 150 });
 alert('Créneau créé avec succès !');
 } else {
 const error = await response.json();
 console.error('Erreur serveur:', error);
 alert(`Erreur: ${error.error || 'Erreur inconnue'}`);
 }
 } catch (error) {
 console.error('Erreur création créneau:', error);
 alert(`Erreur lors de la création: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
 } finally {
 setLoading(false);
 }
 };

 // Supprimer un créneau
 const handleDeleteSlot = async (slotId: string) => {
 if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce créneau ?')) return;

 try {
 const response = await fetch(`${API_BASE_URL}/api/admin/slots/${slotId}`, {
 method: 'DELETE'
 });

 if (response.ok) {
 await loadSlots();
 await loadStats();
 alert('Créneau supprimé avec succès !');
 } else {
 alert('Erreur lors de la suppression');
 }
 } catch (error) {
 console.error('Erreur suppression créneau:', error);
 alert('Erreur lors de la suppression');
 }
 };

 // Basculer la disponibilité d'un créneau
 const toggleSlotAvailability = async (slotId: string, currentAvailability: boolean) => {
 try {
 const response = await fetch(`${API_BASE_URL}/api/admin/slots/${slotId}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ available: !currentAvailability })
 });

 if (response.ok) {
 await loadSlots();
 await loadStats();
 } else {
 alert('Erreur lors de la mise à jour');
 }
 } catch (error) {
 console.error('Erreur mise à jour créneau:', error);
 alert('Erreur lors de la mise à jour');
 }
 };

 const formatDate = (dateString: string) => {
 return new Date(dateString).toLocaleDateString('fr-FR', {
 weekday: 'long',
 year: 'numeric',
 month: 'long',
 day: 'numeric'
 });
 };

 const getStatusBadge = (status: string) => {
 const statusClasses = {
 confirmed: 'bg-green-500/20 text-green-400 border-green-500/30',
 pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
 cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
 expired: 'bg-gray-500/20 text-gray-300 border-gray-500/30'
 };

 return (
 <span className={`px-2 py-1 rounded-full text-xs border ${statusClasses[status as keyof typeof statusClasses]}`}>
 {status}
 </span>
 );
 };

 return (
 <div className="min-h-screen text-white pt-20 relative overflow-hidden">
 
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-28 py-8">
 
 {/* Header */}
 <div className="glass-card p-8 mb-8 animate-float">
 <h1 className="text-title text-white mb-8">
 ADMINISTRATION - TESTING CHAMONIX
 </h1>
 <p className="text-paragraph">
 Gérez les créneaux de tests et suivez les réservations
 </p>
 </div>

 {/* Navigation Tabs */}
 <div className="glass-card mb-8">
 <div className="flex space-x-1 p-2">
 {[
 { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
 { id: 'slots', label: '📅 Créneaux', icon: '📅' },
 { id: 'bookings', label: '🎫 Réservations', icon: '🎫' }
 ].map(tab => (
 <button
 key={tab.id}
 onClick={() => setActiveTab(tab.id as any)}
 className={`text-body-uppercase transition-all duration-300 ${
 activeTab === tab.id
 ? 'btn-enduraw'
 : 'text-gray-300 hover:text-white hover:bg-white/10 py-3 px-6 rounded-2xl'
 }`}
 >
 {tab.label}
 </button>
 ))}
 </div>
 </div>

 {/* Dashboard Tab */}
 {activeTab === 'dashboard' && (
 <div className="space-y-6">
 {/* Stats Cards */}
 {stats && (
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 <div className="stat-card p-6">
 <h3 className="text-xl font-bold text-white mb-2">Revenus</h3>
 <p className="text-3xl font-bold text-gradient-blue-light">{stats.total_revenue}€</p>
 </div>
 <div className="stat-card p-6">
 <h3 className="text-xl font-bold text-white mb-2">Confirmées</h3>
 <p className="text-3xl font-bold text-green-400">{stats.confirmed_bookings}</p>
 </div>
 <div className="stat-card p-6">
 <h3 className="text-xl font-bold text-white mb-2">En attente</h3>
 <p className="text-3xl font-bold text-yellow-400">{stats.pending_bookings}</p>
 </div>
 <div className="stat-card p-6">
 <h3 className="text-xl font-bold text-white mb-2">Créneaux libres</h3>
 <p className="text-3xl font-bold text-blue-400">{stats.available_slots}</p>
 </div>
 </div>
 )}
 </div>
 )}

 {/* Slots Tab */}
 {activeTab === 'slots' && (
 <div className="space-y-6">
 {/* Formulaire création créneau */}
 <div className="glass-card p-6 animate-float-slow">
 <h2 className="text-2xl font-bold mb-4 text-white">Créer un nouveau créneau</h2>
 <form onSubmit={handleCreateSlot} className="grid md:grid-cols-4 gap-4">
 <div>
 <label className="block text-white text-sm font-medium mb-1">Date</label>
 <input
 type="date"
 required
 value={newSlot.date}
 onChange={(e) => setNewSlot({...newSlot, date: e.target.value})}
 className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
 />
 </div>
 <div>
 <label className="block text-white text-sm font-medium mb-1">Heure</label>
 <input
 type="time"
 required
 value={newSlot.time}
 onChange={(e) => setNewSlot({...newSlot, time: e.target.value})}
 className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
 />
 </div>
 <div>
 <label className="block text-white text-sm font-medium mb-1">Protocole</label>
 <select
 value={newSlot.protocol}
 onChange={(e) => setNewSlot({...newSlot, protocol: e.target.value as 'vo2max' | 'runwalk'})}
 className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
 >
 <option value="vo2max">VO2Max (150€)</option>
 <option value="runwalk">Run/Walk (50€)</option>
 </select>
 </div>
 <div>
 <label className="block text-white text-sm font-medium mb-1">Prix (€)</label>
 <input
 type="number"
 required
 min="0"
 value={newSlot.price}
 onChange={(e) => setNewSlot({...newSlot, price: parseInt(e.target.value) || 0})}
 className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
 />
 </div>
 <div className="md:col-span-4">
 <button
 type="submit"
 disabled={loading}
 className="btn-enduraw disabled:opacity-50"
 >
 {loading ? 'Création...' : 'Créer le créneau'}
 </button>
 </div>
 </form>
 </div>

 {/* Liste des créneaux */}
 <div className="glass-card p-6">
 <h2 className="text-2xl font-bold mb-4 text-white">Créneaux existants</h2>
 <div className="overflow-x-auto">
 <table className="w-full text-white">
 <thead>
 <tr className="border-b border-white/20">
 <th className="text-left py-3 px-4">Date</th>
 <th className="text-left py-3 px-4">Heure</th>
 <th className="text-left py-3 px-4">Protocole</th>
 <th className="text-left py-3 px-4">Prix</th>
 <th className="text-left py-3 px-4">Statut</th>
 <th className="text-left py-3 px-4">Actions</th>
 </tr>
 </thead>
 <tbody>
 {slots.map(slot => (
 <tr key={slot.id} className="border-b border-white/10">
 <td className="py-3 px-4">{formatDate(slot.date)}</td>
 <td className="py-3 px-4 font-mono">{slot.time}</td>
 <td className="py-3 px-4">
 <span className={`px-2 py-1 rounded-full text-xs ${
 slot.protocol === 'vo2max' 
 ? 'bg-purple-500/20 text-purple-400' 
 : 'bg-green-500/20 text-green-400'
 }`}>
 {slot.protocol === 'vo2max' ? 'VO2Max' : 'Run/Walk'}
 </span>
 </td>
 <td className="py-3 px-4 font-bold">{slot.price}€</td>
 <td className="py-3 px-4">
 <span className={`px-2 py-1 rounded-full text-xs ${
 slot.available 
 ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
 : 'bg-red-500/20 text-red-400 border border-red-500/30'
 }`}>
 {slot.available ? 'Disponible' : 'Indisponible'}
 </span>
 </td>
 <td className="py-3 px-4">
 <div className="flex gap-2">
 <button
 onClick={() => toggleSlotAvailability(slot.id, slot.available)}
 className={`text-body-uppercase px-3 py-1 rounded-2xl text-xs transition-all duration-300 ${
 slot.available
 ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
 : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
 }`}
 >
 {slot.available ? 'Désactiver' : 'Activer'}
 </button>
 <button
 onClick={() => handleDeleteSlot(slot.id)}
 className="text-body-uppercase px-3 py-1 rounded-2xl text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
 >
 Supprimer
 </button>
 </div>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </div>
 )}

 {/* Bookings Tab */}
 {activeTab === 'bookings' && (
 <div className="glass-card p-6">
 <h2 className="text-2xl font-bold mb-4 text-white">Réservations</h2>
 <div className="overflow-x-auto">
 <table className="w-full text-white text-sm">
 <thead>
 <tr className="border-b border-white/20">
 <th className="text-left py-3 px-2">Client</th>
 <th className="text-left py-3 px-2">Date/Heure</th>
 <th className="text-left py-3 px-2">Protocole</th>
 <th className="text-left py-3 px-2">Prix</th>
 <th className="text-left py-3 px-2">Statut</th>
 <th className="text-left py-3 px-2">Réservé le</th>
 </tr>
 </thead>
 <tbody>
 {bookings.map(booking => (
 <tr key={booking.id} className="border-b border-white/10">
 <td className="py-3 px-2">
 <div>
 <div className="font-medium">{booking.customer.firstName} {booking.customer.lastName}</div>
 <div className="text-gray-300 text-xs">{booking.customer.email}</div>
 </div>
 </td>
 <td className="py-3 px-2">
 <div>
 <div>{formatDate(booking.date)}</div>
 <div className="font-mono text-blue-400">{booking.time}</div>
 </div>
 </td>
 <td className="py-3 px-2">
 <span className={`px-2 py-1 rounded-full text-xs ${
 booking.protocol === 'vo2max' 
 ? 'bg-purple-500/20 text-purple-400' 
 : 'bg-green-500/20 text-green-400'
 }`}>
 {booking.protocol === 'vo2max' ? 'VO2Max' : 'Run/Walk'}
 </span>
 </td>
 <td className="py-3 px-2 font-bold">{booking.price}€</td>
 <td className="py-3 px-2">{getStatusBadge(booking.status)}</td>
 <td className="py-3 px-2 text-gray-300 text-xs">
 {new Date(booking.created_at).toLocaleDateString('fr-FR')}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 )}

 </div>
 </div>
 );
};

export default AdminPage;