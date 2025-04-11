"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaCopy, FaCheck, FaUpload, FaQuestionCircle, FaTag, FaEuroSign, FaImage, FaList, FaTimes, FaCode } from 'react-icons/fa';
import Image from 'next/image';

interface Product {
    id: string;
    name: string;
    category: string;
    sizes: string[];
    price: string;
    description: string;
    image: string;
}

interface ValidationError {
    field: string;
    message: string;
}

const ProductsGenerator = () => {
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
    const [copied, setCopied] = useState(false);
    const [errors, setErrors] = useState<ValidationError[]>([]);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [showInstructions, setShowInstructions] = useState(false);

    // Charger les produits depuis le localStorage au démarrage
    useEffect(() => {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            try {
                const parsedProducts = JSON.parse(savedProducts);
                setProducts(parsedProducts);
            } catch (error) {
                console.error('Erreur lors du chargement des produits:', error);
            }
        }
    }, []);

    // Sauvegarder les produits dans le localStorage à chaque modification
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const validateProduct = (product: Partial<Product>): ValidationError[] => {
        const errors: ValidationError[] = [];
        
        if (!product.name?.trim()) {
            errors.push({ field: 'name', message: 'Le nom est requis' });
        }
        
        if (!product.category?.trim()) {
            errors.push({ field: 'category', message: 'La catégorie est requise' });
        }
        
        if (!product.price?.trim()) {
            errors.push({ field: 'price', message: 'Le prix est requis' });
        }
        
        if (!product.image?.trim()) {
            errors.push({ field: 'image', message: 'L\'URL de l\'image est requise' });
        }
        
        if (!product.description?.trim()) {
            errors.push({ field: 'description', message: 'La description est requise' });
        }
        
        if (!product.sizes?.length) {
            errors.push({ field: 'sizes', message: 'Au moins une taille est requise' });
        }

        return errors;
    };

    const handleAddProduct = () => {
        const validationErrors = validateProduct(newProduct);
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        const product: Product = {
            id: Date.now().toString(),
            name: newProduct.name!,
            category: newProduct.category!,
            sizes: newProduct.sizes || [],
            price: newProduct.price!,
            description: newProduct.description!,
            image: newProduct.image!
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
        setErrors([]);
        setPreviewImage(null);
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setPreviewImage(product.image);
    };

    const handleUpdateProduct = () => {
        if (editingProduct) {
            const validationErrors = validateProduct(editingProduct);
            if (validationErrors.length > 0) {
                setErrors(validationErrors);
                return;
            }

            setProducts(products.map(p => 
                p.id === editingProduct.id ? editingProduct : p
            ));
            setEditingProduct(null);
            setErrors([]);
            setPreviewImage(null);
        }
    };

    const handleDeleteProduct = (id: string) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, product: Partial<Product>) => {
        const imageUrl = e.target.value;
        if (product === newProduct) {
            setNewProduct({ ...newProduct, image: imageUrl });
            setPreviewImage(imageUrl);
        } else if (editingProduct) {
            setEditingProduct({ ...editingProduct, image: imageUrl });
            setPreviewImage(imageUrl);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Ici, vous pouvez ajouter la logique pour uploader l'image vers un service de stockage
        // Pour l'exemple, nous utilisons une URL temporaire
        const imageUrl = URL.createObjectURL(file);
        if (editingProduct) {
            setEditingProduct({ ...editingProduct, image: imageUrl });
            setPreviewImage(imageUrl);
        } else {
            setNewProduct({ ...newProduct, image: imageUrl });
            setPreviewImage(imageUrl);
        }
    };

    const generateTypeScriptCode = () => {
        const categories = [...new Set(products.map(p => p.category))];
        
        return `export interface Product {
    id: string;
    name: string;
    category: string;
    sizes: string[];
    price: string;
    description: string;
    image: string;
}

export const products: Product[] = ${JSON.stringify(products, null, 4)};

export const categories = ${JSON.stringify(categories, null, 4)};
`;
    };

    const handleCopyCode = async () => {
        const code = generateTypeScriptCode();
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-modern-navy-black p-4 sm:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FaTag className="text-blue-500" />
                        Générateur de Code Products.ts
                    </h1>
                    <button
                        onClick={() => setShowInstructions(true)}
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                        <FaQuestionCircle />
                        Instructions
                    </button>
                </div>

                {/* Modal des instructions */}
                {showInstructions && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 max-w-2xl w-full mx-4"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FaQuestionCircle className="text-blue-500" />
                                    Instructions d&apos;utilisation
                                </h2>
                                <button
                                    onClick={() => setShowInstructions(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h3 className="font-bold text-white mb-2">1. Ajouter un produit</h3>
                                        <p>Remplissez tous les champs du formulaire &quot;Ajouter un nouveau produit&quot; :</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>Nom du produit</li>
                                        <li>Catégorie</li>
                                        <li>Prix</li>
                                        <li>Image (URL ou upload)</li>
                                        <li>Description</li>
                                        <li>Tailles (séparées par des virgules)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">2. Modifier un produit</h3>
                                    <p>Cliquez sur l&apos;icône <FaEdit className="inline" /> à côté du produit pour le modifier.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">3. Supprimer un produit</h3>
                                    <p>Cliquez sur l&apos;icône <FaTrash className="inline" /> à côté du produit pour le supprimer.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">4. Générer le code</h3>
                                    <p>Une fois tous vos produits ajoutés, cliquez sur &quot;Copier le code&quot; pour obtenir le code TypeScript à coller dans votre fichier products.ts</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">5. Sauvegarde automatique</h3>
                                    <p>Tous vos produits sont automatiquement sauvegardés dans le localStorage de votre navigateur.</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowInstructions(false)}
                                className="mt-6 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                            >
                                Fermer
                            </button>
                        </motion.div>
                    </div>
                )}

                {/* Formulaire d'ajout de produit */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 mb-8"
                >
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaPlus className="text-green-500" />
                        Ajouter un nouveau produit
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <FaTag className="text-gray-400" />
                                <label className="text-gray-300 text-sm">Nom du produit</label>
                            </div>
                            <input
                                type="text"
                                placeholder="Nom du produit"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                    errors.find(e => e.field === 'name') ? 'border-red-500' : 'border-white/10'
                                } text-white placeholder-white/50 focus:outline-none focus:border-blue-500 w-full`}
                            />
                            {errors.find(e => e.field === 'name') && (
                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'name')?.message}</p>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <FaList className="text-gray-400" />
                                <label className="text-gray-300 text-sm">Catégorie</label>
                            </div>
                            <input
                                type="text"
                                placeholder="Catégorie"
                                value={newProduct.category}
                                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                    errors.find(e => e.field === 'category') ? 'border-red-500' : 'border-white/10'
                                } text-white placeholder-white/50 focus:outline-none focus:border-blue-500 w-full`}
                            />
                            {errors.find(e => e.field === 'category') && (
                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'category')?.message}</p>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <FaEuroSign className="text-gray-400" />
                                <label className="text-gray-300 text-sm">Prix</label>
                            </div>
                            <input
                                type="text"
                                placeholder="Prix"
                                value={newProduct.price}
                                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                    errors.find(e => e.field === 'price') ? 'border-red-500' : 'border-white/10'
                                } text-white placeholder-white/50 focus:outline-none focus:border-blue-500 w-full`}
                            />
                            {errors.find(e => e.field === 'price') && (
                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'price')?.message}</p>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <FaImage className="text-gray-400" />
                                <label className="text-gray-300 text-sm">Image</label>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    value={newProduct.image}
                                    onChange={(e) => handleImageChange(e, newProduct)}
                                    className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                        errors.find(e => e.field === 'image') ? 'border-red-500' : 'border-white/10'
                                    } text-white placeholder-white/50 focus:outline-none focus:border-blue-500 flex-1`}
                                />
                                <label className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2">
                                    <FaUpload />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            {errors.find(e => e.field === 'image') && (
                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'image')?.message}</p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-1">
                                <FaTag className="text-gray-400" />
                                <label className="text-gray-300 text-sm">Description</label>
                            </div>
                            <textarea
                                placeholder="Description"
                                value={newProduct.description}
                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                    errors.find(e => e.field === 'description') ? 'border-red-500' : 'border-white/10'
                                } text-white placeholder-white/50 focus:outline-none focus:border-blue-500 w-full`}
                            />
                            {errors.find(e => e.field === 'description') && (
                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'description')?.message}</p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-1">
                                <FaList className="text-gray-400" />
                                <label className="text-gray-300 text-sm">Tailles (séparées par des virgules)</label>
                            </div>
                            <input
                                type="text"
                                placeholder="Tailles (séparées par des virgules)"
                                value={newProduct.sizes?.join(', ')}
                                onChange={(e) => setNewProduct({ ...newProduct, sizes: e.target.value.split(',').map(s => s.trim()) })}
                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                    errors.find(e => e.field === 'sizes') ? 'border-red-500' : 'border-white/10'
                                } text-white placeholder-white/50 focus:outline-none focus:border-blue-500 w-full`}
                            />
                            {errors.find(e => e.field === 'sizes') && (
                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'sizes')?.message}</p>
                            )}
                        </div>
                    </div>
                    {previewImage && (
                        <div className="mt-4 relative w-full h-48">
                            <Image
                                src={previewImage}
                                alt="Prévisualisation"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    )}
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
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 mb-8"
                >
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaList className="text-blue-500" />
                        Liste des produits
                    </h2>
                    <div className="space-y-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white/5 p-4 rounded-lg border border-white/10"
                            >
                                {editingProduct?.id === product.id ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                value={editingProduct.name}
                                                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                                    errors.find(e => e.field === 'name') ? 'border-red-500' : 'border-white/10'
                                                } text-white focus:outline-none focus:border-blue-500 w-full`}
                                            />
                                            {errors.find(e => e.field === 'name') && (
                                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'name')?.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                value={editingProduct.category}
                                                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                                    errors.find(e => e.field === 'category') ? 'border-red-500' : 'border-white/10'
                                                } text-white focus:outline-none focus:border-blue-500 w-full`}
                                            />
                                            {errors.find(e => e.field === 'category') && (
                                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'category')?.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                value={editingProduct.price}
                                                onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                                    errors.find(e => e.field === 'price') ? 'border-red-500' : 'border-white/10'
                                                } text-white focus:outline-none focus:border-blue-500 w-full`}
                                            />
                                            {errors.find(e => e.field === 'price') && (
                                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'price')?.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={editingProduct.image}
                                                    onChange={(e) => handleImageChange(e, editingProduct)}
                                                    className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                                        errors.find(e => e.field === 'image') ? 'border-red-500' : 'border-white/10'
                                                    } text-white focus:outline-none focus:border-blue-500 flex-1`}
                                                />
                                                <label className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2">
                                                    <FaUpload />
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleFileUpload}
                                                        className="hidden"
                                                    />
                                                </label>
                                            </div>
                                            {errors.find(e => e.field === 'image') && (
                                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'image')?.message}</p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <textarea
                                                value={editingProduct.description}
                                                onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                                    errors.find(e => e.field === 'description') ? 'border-red-500' : 'border-white/10'
                                                } text-white focus:outline-none focus:border-blue-500 w-full`}
                                            />
                                            {errors.find(e => e.field === 'description') && (
                                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'description')?.message}</p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <input
                                                type="text"
                                                value={editingProduct.sizes.join(', ')}
                                                onChange={(e) => setEditingProduct({ ...editingProduct, sizes: e.target.value.split(',').map(s => s.trim()) })}
                                                className={`px-4 py-2 rounded-lg bg-white/5 border ${
                                                    errors.find(e => e.field === 'sizes') ? 'border-red-500' : 'border-white/10'
                                                } text-white focus:outline-none focus:border-blue-500 w-full`}
                                            />
                                            {errors.find(e => e.field === 'sizes') && (
                                                <p className="text-red-500 text-sm mt-1">{errors.find(e => e.field === 'sizes')?.message}</p>
                                            )}
                                        </div>
                                        {previewImage && (
                                            <div className="md:col-span-2 relative w-full h-48">
                                                <Image
                                                    src={previewImage}
                                                    alt="Prévisualisation"
                                                    fill
                                                    className="object-contain rounded-lg"
                                                />
                                            </div>
                                        )}
                                        <div className="md:col-span-2 flex gap-2">
                                            <button
                                                onClick={handleUpdateProduct}
                                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                            >
                                                Sauvegarder
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setEditingProduct(null);
                                                    setPreviewImage(null);
                                                    setErrors([]);
                                                }}
                                                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                                            >
                                                Annuler
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-between items-start">
                                        <div className="flex gap-4">
                                            {product.image && (
                                                <div className="relative w-24 h-24">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-contain rounded-lg"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                                                <p className="text-gray-300">{product.category}</p>
                                                <p className="text-gray-300">{product.price}</p>
                                                <p className="text-gray-300">{product.description}</p>
                                                <p className="text-gray-300">Tailles: {product.sizes.join(', ')}</p>
                                            </div>
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

                {/* Code généré */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <FaCode className="text-purple-500" />
                            Code TypeScript généré
                        </h2>
                        <button
                            onClick={handleCopyCode}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            {copied ? <FaCheck /> : <FaCopy />}
                            {copied ? 'Copié !' : 'Copier le code'}
                        </button>
                    </div>
                    <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm text-gray-300">
                            {generateTypeScriptCode()}
                        </code>
                    </pre>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductsGenerator; 