import { useState } from "react";
import emailjs from "@emailjs/browser";

const OrderForm = () => {
    const [formData, setFormData] = useState({
        buyer_first_name: "",
        buyer_last_name: "",
        buyer_phone: "",
        user_email: "",
        defunt_name: "",
        composition_number: "",
        message: "",
        ribbon_message: "",
        color_customization: "",
        delivery_address: "",
        delivery_date: "",
        funeral_time: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_kzfwhjg",
                "template_6ooqzus",
                formData,
                "nXApsTQNwYeK2S3Ox"
            )
            .then(
                () => {
                    alert("Commande envoyée !");
                    setFormData({
                        buyer_first_name: "",
                        buyer_last_name: "",
                        buyer_phone: "",
                        user_email: "",
                        defunt_name: "",
                        composition_number: "",
                        message: "",
                        ribbon_message: "",
                        color_customization: "",
                        delivery_address: "",
                        delivery_date: "",
                        funeral_time: "",
                    });
                },
                (error) => {
                    console.error("Erreur :", error);
                    alert("Erreur lors de l'envoi, réessayez.");
                }
            );
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
                Passer une commande
            </h2>
            <form onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Prénom<span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="buyer_first_name"
                            placeholder="Votre prénom"
                            required
                            value={formData.buyer_first_name}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Nom<span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="buyer_last_name"
                            placeholder="Votre nom"
                            required
                            value={formData.buyer_last_name}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Numéro de téléphone <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="tel"
                            name="buyer_phone"
                            placeholder="Votre numéro de téléphone"
                            required
                            value={formData.buyer_phone}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Email <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Votre email"
                            required
                            value={formData.user_email}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>
                </div>

                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Adresse de livraison <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="delivery_address"
                            placeholder="Entrez l'adresse de livraison"
                            required
                            value={formData.delivery_address || ""}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Heure de l'enterrement <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="text"
                            name="funeral_time"
                            placeholder="ex: 14h30"
                            required
                            value={formData.funeral_time}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Date de livraison <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            type="date"
                            name="delivery_date"
                            required
                            value={formData.delivery_date || ""}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">
                            Nom du défunt <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <input
                        type="text"
                        name="defunt_name"
                        placeholder="Nom du défunt"
                        required
                        value={formData.defunt_name}
                        onChange={handleChange}
                        className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Numéro de la composition <span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            name="composition_number"
                            placeholder="Entrez le ou les numéros de composition"
                            required
                            value={formData.composition_number}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">
                                Personnalisation de couleur - Optionel
                            </span>
                        </label>
                        <input
                            type="text"
                            name="color_customization"
                            placeholder="Entrez une couleur ou un thème de couleur"
                            value={formData.color_customization || ""}
                            onChange={handleChange}
                            className="input input-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                        />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Votre message - Optionel</span>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Votre message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Message sur ruban (+5€) - Optionel</span>
                    </label>
                    <textarea
                        name="ribbon_message"
                        placeholder="Message sur ruban (+5€)"
                        value={formData.ribbon_message}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full border-gray-300 bg-gray-200 text-black placeholder-gray-500 hover:bg-gray-300"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="btn bg-black text-white w-full md:w-auto hover:bg-gray-800 transition duration-300"
                    >
                        Envoyer la commande
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;
