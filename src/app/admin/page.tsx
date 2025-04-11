"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUnlock, FaPlus, FaEdit, FaTrash, FaSave } from 'react-icons/fa';

interface Product {
    id: string;
    name: string;
    category: string;
    sizes: string[];
    price: string;
    description: string;
    image: string;
}

const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [newProduct, setNewProduct] = useState<Partial<Product>>({
        name: '',
        category: '',
        sizes: [],
        price: '',
        description: '',
        image: ''
    });

    useEffect(() => {
        // Charger les produits depuis le localStorage
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        }
    }, []);

    const handleLogin = () => {
        // Mot de passe simple (à changer en production)
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Mot de passe incorrect');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
    };

    const handleSaveProducts = () => {
        localStorage.setItem('products', JSON.stringify(products));
        alert('Produits sauvegardés avec succès !');
    };

    const handleAddProduct = () => {
        if (newProduct.name && newProduct.category) {
            const product: Product = {
                id: Date.now().toString(),
                name: newProduct.name,
                category: newProduct.category,
                sizes: newProduct.sizes || [],
                price: newProduct.price || '',
                description: newProduct.description || '',
                image: newProduct.image || ''
            };
            setProducts([...products, product]);
            setNewProduct({
                name: '',
                category: '',
                sizes: [],
                price: '',
                description: '',
                image: ''
            });
        }
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
    };

    const handleUpdateProduct = () => {
        if (editingProduct) {
            setProducts(products.map(p => 
                p.id === editingProduct.id ? editingProduct : p
            ));
            setEditingProduct(null);
        }
    };

    const handleDeleteProduct = (id: string) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-modern-navy-black flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 max-w-md w-full"
                >
                    <h1 className="text-2xl font-bold text-white mb-6 text-center">Administration</h1>
                    <div className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={handleLogin}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaLock className="text-lg" />
                            Se connecter
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-modern-navy-black p-4 sm:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-white">Administration des Produits</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                        <FaUnlock className="text-lg" />
                        Se déconnecter
                    </button>
                </div>

                {/* Formulaire d'ajout de produit */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 mb-8"
                >
                    <h2 className="text-xl font-bold text-white mb-4">Ajouter un nouveau produit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nom du produit"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Catégorie"
                            value={newProduct.category}
                            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Prix"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                        />
                        <textarea
                            placeholder="Description"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 md:col-span-2"
                        />
                        <input
                            type="text"
                            placeholder="Tailles (séparées par des virgules)"
                            value={newProduct.sizes?.join(', ')}
                            onChange={(e) => setNewProduct({ ...newProduct, sizes: e.target.value.split(',').map(s => s.trim()) })}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 md:col-span-2"
                        />
                    </div>
                    <button
                        onClick={handleAddProduct}
                        className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                        <FaPlus className="text-lg" />
                        Ajouter le produit
                    </button>
                </motion.div>

                {/* Liste des produits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-white">Liste des produits</h2>
                        <button
                            onClick={handleSaveProducts}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            <FaSave className="text-lg" />
                            Sauvegarder
                        </button>
                    </div>

                    <div className="space-y-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white/5 p-4 rounded-lg border border-white/10"
                            >
                                {editingProduct?.id === product.id ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            value={editingProduct.name}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                                        />
                                        <input
                                            type="text"
                                            value={editingProduct.category}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                                        />
                                        <input
                                            type="text"
                                            value={editingProduct.price}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                                        />
                                        <input
                                            type="text"
                                            value={editingProduct.image}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                                        />
                                        <textarea
                                            value={editingProduct.description}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 md:col-span-2"
                                        />
                                        <input
                                            type="text"
                                            value={editingProduct.sizes.join(', ')}
                                            onChange={(e) => setEditingProduct({ ...editingProduct, sizes: e.target.value.split(',').map(s => s.trim()) })}
                                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 md:col-span-2"
                                        />
                                        <div className="md:col-span-2 flex gap-2">
                                            <button
                                                onClick={handleUpdateProduct}
                                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                            >
                                                Sauvegarder
                                            </button>
                                            <button
                                                onClick={() => setEditingProduct(null)}
                                                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                                            >
                                                Annuler
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{product.name}</h3>
                                            <p className="text-gray-300">{product.category}</p>
                                            <p className="text-gray-300">{product.price}</p>
                                            <p className="text-gray-300">{product.description}</p>
                                            <p className="text-gray-300">Tailles: {product.sizes.join(', ')}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEditProduct(product)}
                                                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteProduct(product.id)}
                                                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminPage; 