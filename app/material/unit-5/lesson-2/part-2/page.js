'use client'
import { useState, useEffect, useRef } from 'react';
import { useAuth } from "../../../../hooks/useAuth";
import Link from 'next/link';
import Image from 'next/image';
import Aside from "../../../../components/aside";
import Class from "../../../../components/class";
import {PageFlip} from 'page-flip';


const lessonData = {
    id: "unit5-title",
    unitTitle: "Lesson 2: Non-Medical Terminology – Part 2: Types of Food (Hospital Menu)",
    description: null,
    nextLesson: "/material/unit-5/lesson-2/part-3",
    prevLesson: "/material/unit-5/lesson-2/part-1",
    restart:"/material/unit-5",
    courseNumber: 5,
    currentStep: 3,
    totalSteps: 4,
};

export default function Lesson2() {
    const { user, loading } = useAuth();
    const bookRef = useRef(null);
    const pageFlipRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [animation, setAnimation] = useState("animate__fadeIn");

    const menu = [
        {id:0, title: "Clear Liquid", image: "/img/lesson-2-food/clearLiquid.png",},
        {id:1, title: "Food Liquid", image: "/img/lesson-2-food/foodLiquid.png",},
        {id:2, title: "Soft Diet", image: "/img/lesson-2-food/softDiet.png",},
        {id:3, title: "High Fiber", image: "/img/lesson-2-food/highFiber.png",},
        {id:4, title: "Low Fiber", image: "/img/lesson-2-food/lowFiber.png",},
        {id:5, title: "Gluten Free", image: "/img/lesson-2-food/glutenFree.png",},
        {id:6, title: "Diabetic", image: "/img/lesson-2-food/diabetic.png",},
        {id:7, title: "Low Sodium", image: "/img/lesson-2-food/lowSodium.png",},
        {id:8, title: "Low Fat", image: "/img/lesson-2-food/lowFat.png",},
        {id:9, title: "Avoid Spicy", image: "/img/lesson-2-food/avoidSpicy.png",},
        {id:10, title: "Avoid Caffeine", image: "/img/lesson-2-food/avoidCaffeine.png",},
        {id:11, title: "Pregnancy Diet", image: "/img/lesson-2-food/pregnancy.png",},
        {id:12, title: "Renal Diet", image: "/img/lesson-2-food/renal.png",},
        {id:13, title: "Colonoscopy Diet", image: "/img/lesson-2-food/colonoscopy.png",},
    ];

    const nextImage = () => {
    setAnimation("animate__fadeOutLeft");  
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % menu.length);
      setAnimation("animate__fadeInRight");
    }, 300);
    };

    const prevImage = () => {
    setAnimation("animate__fadeOutRight");
    setTimeout(() => {
      setCurrentImage(
        (prev) => (prev - 1 + menu.length) % menu.length
      );
      setAnimation("animate__fadeInLeft");
    }, 300);
    };

    useEffect(() => {
    let initialized = false;

    const init = () => {
        if (initialized || !bookRef.current) return;

        initialized = true;

        pageFlipRef.current = new PageFlip(bookRef.current, {
            width: 500,
            height: 620,
            size: "stretch",
            drawShadow: true,
            flippingTime: 650,           // más rápido
            usePortrait: true,
            autoSize: true,
            showCover: true,
            mobile: true,
            maxShadowOpacity: 0.6,       // sombra más suave
            swipeSpeed: 0.8,
        });

        const pages = document.querySelectorAll('.page');
        console.log('Páginas encontradas:', pages.length);

        if (pages.length > 0) {
            pageFlipRef.current.loadFromHTML(pages);
        }
    };

    // Intentar varias veces
    const interval = setInterval(init, 100);
    setTimeout(() => clearInterval(interval), 2000); // máximo 2 segundos

    return () => clearInterval(interval);
    }, []);

    if (loading) {return <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
    };

    return(
        <div className="flex xl:flex-row flex-col bg-black">
            <Aside/>
            <Class lessonData={lessonData}>
                <p className="p-4">Below you will find some of the most common diets and dietary instructions
                    encountered during medical interpreting assignments.<br/>
                    Each section explains when a particular diet is recommended, the foods commonly included, and the foods patients are often instructed to avoid before certain medical procedures or because of specific health conditions.
                </p>
                <h1 className="text-4xl font-bold text-center mb-10">MediXperts Hospital Dietary Menu</h1>

                    <div className="flex justify-center gap-4 mb-8">
                        <button onClick={() => pageFlipRef.current?.flipPrev()} className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                            ← Anterior
                        </button>
                        <span className="text-2xl font-medium self-center">
                            Página <span id="current-page page">1</span> de <span id="total-pages">5</span>
                        </span>
                        <button onClick={() => pageFlipRef.current?.flipNext()} className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                            Siguiente →
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <div ref={bookRef} className="flip-book">
                            {/* Páginas */}
                            <div className="page page-cover page-cover-top" data-density="hard">
                                <div className="page-content text-center text-black flex flex-col items-center justify-around">
                                    <div className='flex flex-col'>
                                        <h2>MediXperts Hospital Dietary Menu</h2>
                                        <h3>Medical Terminology Course</h3>    
                                    </div>
                                    <Image src="/img/logo.svg" width={400} height={400} alt="logo" className=''/>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Clear Liquid Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta de líquidos claros)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Used before certain medical procedures or while the digestive system is recovering.<br/>
                                        <strong>Common Provider Instructions</strong><br/>
                                        Drink only clear liquids after midnight.<br/><br/>
                                        <strong>Common Foods & Beverages</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>
                                                    • Water (Agua)
                                                </li>
                                                <li>• Apple juice (Jugo de manzana)</li>
                                                <li>• White grape juice (Jugo de uva blanca)</li>
                                                <li>• Clear broth (Caldo claro)</li>
                                                <li>• Tea (Té)</li>
                                                <li>• Black coffee (Café negro)</li>
                                                <li>• Gelatin (Gelatina)</li>
                                                <li>• Ice pops (Paletas heladas)</li>
                                            </ul><br/>
                                            <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>
                                                    Water (Agua)
                                                </li>
                                                <li>• Red, blue, and purple liquids (Líquidos rojos, azules, y púrpuras)</li>
                                                <li>• Milk (Leche)</li>
                                                <li>• Cream (Crema)</li>
                                                <li>• Orange juice (Jugo de naranja)</li>
                                                <li>• Smoothies (Batidos)</li>
                                                <li>• Vegetable soup (Sopa de verduras)</li>
                                                <li>• Solid food (Comida sólida)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Full Liquid Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta líquida completa)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Recommended for patients who cannot tolerate solid food but no longer require only clear liquids.<br/><br/>
                                        <strong>Common Foods & Beverages</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Milk (Leche)</li>
                                                <li>• Yogurt</li>
                                                <li>• Cream soup (Sopa crema)</li>
                                                <li>• Protein shakes (Batidos de proteínas)</li>
                                                <li>• Pudding (Pudín)</li>
                                                <li>• Ice cream (Helado)</li>
                                            </ul><br/>
                                            <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Meat (Carne)</li>
                                                <li>• Bread (Pan)</li>
                                                <li>• Rice (Arroz)</li>
                                                <li>• Vegetables (Verduras)</li>
                                                <li>• Whole fruit (Fruta entera)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Soft Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta blanda)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Recommended after surgery or for patients with chewing or swallowing difficulties.<br/><br/>
                                        <strong>Common Foods & Beverages</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Mashed potatoes (Puré de papas)</li>
                                                <li>• Oatmeal (Avena)</li>
                                                <li>• Scrambled eggs (Huevos revueltos)</li>
                                                <li>• Yogurt</li>
                                                <li>• Bananas</li>
                                                <li>• Applesauce (Puré de manzana)</li>
                                            </ul><br/>
                                            <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Nuts (Frutos secos)</li>
                                                <li>• Raw vegetables (Verduras crudas)</li>
                                                <li>• Tough meats (Carnes duras)</li>
                                                <li>• Popcorn (Palomitas de maíz)</li>
                                                <li>• Potato chips (Papas fritas)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">High-Fiber Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta alta en fibra)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Helps prevent constipation and promotes digestive health.<br/><br/>
                                        <strong>Common Foods</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Whole grains (Granos integrales/enteros)</li>
                                                <li>• Fruits (Frutas)</li>
                                                <li>• Vegetabless (Vegetales)</li>
                                                <li>• Beans (Frijoles)</li>
                                                <li>• Lentils (Lentejas)</li>
                                                <li>• Oatmeal (Avena)</li>
                                            </ul><br/>
                                            <strong>Foods to Limit</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• White bread (Pan blanco)</li>
                                                <li>• White rice (Arroz blanco)</li>
                                                <li>• Highly processed foods (Alimentos ultraprocesados)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Low-Fiber Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta baja en fibra)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Often prescribed after bowel surgery or during gastrointestinal flare-ups.<br/><br/>
                                        <strong>Common Foods</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• White bread (Pan blanco)</li>
                                                <li>• White rice (Arroz blanco)</li>
                                                <li>• Pasta (Pasta)</li>
                                                <li>• Bananas (Bananas)</li>
                                                <li>• Applesauce (Puré de manzana)</li>
                                                <li>• Beans (Frijoles)</li>
                                                <li>• Lentils (Lentejas)</li>
                                                <li>• Oatmeal (Avena)</li>
                                            </ul><br/>
                                            <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Whole grains (Granos integrales/enteros)</li>
                                                <li>• Raw vegetables (Verduras crudas)</li>
                                                <li>• Beans (Frijoles)</li>
                                                <li>• Nuts (Frutos secos)</li>
                                                <li>• Seeds (Semillas)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Gluten-Free Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta libre de gluten)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Recommended for patients with celiac disease or gluten intolerance.<br/><br/>
                                        <strong>Common Foods</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Rice (Arroz)</li>
                                                <li>• Corn (Maíz)</li>
                                                <li>• Potatoes (Papas)</li>
                                                <li>• Meat (Carne)</li>
                                                <li>• Fish (Pescado)</li>
                                                <li>• Eggs (Huevos)</li>
                                            </ul><br/>
                                            <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Wheat (Trigo)</li>
                                                <li>• Rye (Centeno)</li>
                                                <li>• Barley (Cebada)</li>
                                                <li>• Bread (Pan)</li>
                                                <li>• Pasta</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Diabetic Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta para diabéticos)</h6>
                                    </div>
                                    <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Helps maintain healthy blood glucose levels.<br/><br/>
                                        <strong>Recommended Foods</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Lean proteins (Proteínas magras)</li>
                                                <li>• Vegetables</li>
                                                <li>• Whole grains (Granos integrales)</li>
                                                <li>• Healthy fats (Grasas saludables)</li>
                                            </ul><br/>
                                            <strong>Foods to Limit</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Sugary drinks (Bebidas azucaradas)</li>
                                                <li>• Candy (Dulces)</li>
                                                <li>• Cakes (Pasteles)</li>
                                                <li>• Cookies (Galletas dulces)</li>
                                                <li>• Refined carbohydrates (Carbohidratos refinados)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Low-Sodium Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta baja en sodio)</h6>
                                    </div>
                                     <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Recommended for hypertension, heart failure, or kidney disease.<br/><br/>
                                        <strong>Recommended Foods</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Fresh fruits (Frutas frescas)</li>
                                                <li>• Fresh vegetables (Verduras frescas)</li>
                                                <li>• Fresh meat (Carnes frescas)</li>
                                                <li>• Herbs (Hierbas aromáticas)</li>
                                            </ul><br/>
                                            <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Processed meats (Carnes procesadas)</li>
                                                <li>• Canned soup (Sopa enlatada)</li>
                                                <li>• Potato chips (Papas fritas)</li>
                                                <li>• Fast food (Comida rápida)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Low-Fat Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta baja en grasas)</h6>
                                    </div>
                                     <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Commonly prescribed for gallbladder disease, pancreatitis, or digestive disorders.<br/><br/>
                                        <strong>Recommended Foods</strong>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Chicken (Pollo)</li>
                                                <li>• Turkey (Pavo)</li>
                                                <li>• Fish (Pescado)</li>
                                                <li>• Fruits (Frutas)</li>
                                                <li>• Vegetables</li>
                                            </ul><br/>
                                            <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Fried foods (Comidas fritas)</li>
                                                <li>• Butter (Mantequilla)</li>
                                                <li>• Cream (Crema)</li>
                                                <li>• Bacon (Tocino)</li>
                                                <li>• Sausage (Salchichas)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Avoid Spicy Foods</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Evitar alimentos picantes)</h6>
                                    </div>
                                     <div className="page-text text-black"><strong>Common Reasons: </strong><br/>
                                        GERD, gastritis, ulcers, or digestive irritation.<br/><br/>
                                        <strong>Foods to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Chili peppers (Ajíes / Chiles)</li>
                                                <li>• Hot sauce (Salsa picante)</li>
                                                <li>• Spicy seasoning (Condimentos picantes)</li>
                                                <li>• Jalapeños (Jalapeños)</li>
                                                <li>• Curry</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Avoid Caffeine</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Evitar la cafeína)</h6>
                                    </div>
                                     <div className="page-text text-black"><strong>Common Reasons: </strong><br/>
                                        Heart conditions, pregnancy, anxiety disorders, or certain gastrointestinal conditions.<br/><br/>
                                        <strong>Foods & Drinks to Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Coffee (Café)</li>
                                                <li>• Energy drinks (Bebidas energéticas)</li>
                                                <li>• Black tea (Té negro)</li>
                                                <li>• Cola (Refrescos de cola)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">NPO</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Nada por vía oral)</h6>
                                    </div>
                                     <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Patients must not eat or drink before surgery or certain medical procedures.<br/><br/>
                                        <strong>Common Provider Instructions</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Do not eat or drink after midnight</li>
                                                <li>• No food</li>
                                                <li>• No water unless instructed otherwise</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Colonoscopy Preparation</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Preparación para colonoscopia)</h6>
                                    </div>
                                     <div className="page-text text-black">
                                        <strong>Usually Allowed:</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Water (Agua)</li>
                                                <li>• Apple juice (Jugo de manzana)</li>
                                                <li>• White grape juice (Jugo de uva blanca)</li>
                                                <li>• Clear broth (Caldo claro)</li>
                                                <li>• Tea (Té)</li>
                                                <li>• Black coffee (Café negro)</li>
                                                <li>• Gelatin (Gelatina)</li>
                                            </ul><br/>
                                        <strong>Avoid</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Red, blue, and purple liquids (Líquidos rojos, azules, y púrpuras)</li>
                                                <li>• Solid food (Comida sólida)</li>
                                            </ul><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Pregnancy Nutrition</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Nutrición durante el embarazo)</h6>
                                    </div>
                                     <div className="page-text text-black">
                                        <strong>Common Foods to Avoid:</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Raw fish (Pescado crudo)</li>
                                                <li>• Sushi (Sushi)</li>
                                                <li>• Unpasteurized dairy (Lácteos no pasteurizados)</li>
                                                <li>• Undercooked meat (Carne poco cocida)</li>
                                                <li>• High-mercury fish (Pescados con alto contenido de mercurio)</li>
                                                <li>• Alcohol (Alcohol)</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="page">
                                <div className="page-content flex flex-col items-center justify-between gap-16">
                                    <div className='flex flex-col items-center gap-1'>
                                        <h2 className="page-header text-black font-bold">Renal Diet</h2>
                                        <h6 className='italic text-blue-700 text-xl'>(Dieta renal)</h6>
                                    </div>
                                     <div className="page-text text-black"><strong>Purpose: </strong><br/>
                                        Recommended for patients with chronic kidney disease or those receiving dialysis.<br/><br/>
                                        <strong>Common Dietary Restrictions:</strong><br/>
                                            <ul className='flex flex-col gap-0 items-start list-disc'>
                                                <li>• Potassium (Potasio)</li>
                                                <li>• Phosphorus (Fósforo)</li>
                                                <li>• Sodium (Sodio)</li>
                                                <li>• Fluids (Líquidos)</li>
                                            </ul><br/>
                                        <strong>Examples of Foods Often Limited:</strong><br/>
                                        <ul className='flex flex-col gap-0 items-start list-disc'>
                                            <li>• Bananas (Bananas)</li>
                                            <li>• Tomatoes (Tomates)</li>
                                            <li>• Potatoes (Papas)</li>
                                            <li>• Dairy products (Productos lácteos)</li>
                                            <li>• Processed foods (Alimentos procesados)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="page page-cover page-cover-bottom" data-density="hard">
                                <div className="page-content">
                                    <div className='flex flex-col items-center gap-2'>
                                        <h6 className="text-black text-xl font-bold">Whant to learn more?</h6>
                                        
                                        <div className="page-text text-black overflow-y-scroll">
                                            Remember that the purpose of this activity is to provide a general overview of the dietary terms and nutrition-related instructions that medical interpreters commonly encounter during their daily assignments.<br/>
                                            The more familiar you become with therapeutic diets, common food restrictions, and nutrition terminology, the easier it becomes to accurately interpret conversations involving dietary recommendations, chronic conditions, and medical procedures.<br/>
                                            If you would like to continue expanding your knowledge of nutrition and therapeutic diets, we encourage you to explore the following trusted online resources:<br/>
                                            <ul className='list-disc flex flex-col'>
                                                <Link href="https://www.nutrition.gov/" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Nutrition.gov</Link>
                                                <Link href="https://eatright.org" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Academy of Nutrition and Dietetics: eatright.org</Link>
                                                <Link href="https://medlineplus.gov/nutrition.html" className='text-blue-500 hover:text-white hover:underline hover:decoration-white'>Nutrition: MedlinePlus</Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center w-full pt-8'>
                        <h1 className='text-4xl'>{menu[currentImage].title}</h1>
                        <Image src={menu[currentImage].image} alt={menu[currentImage].title} width={500} height={500} className={"w-[100%] rounded-xl animate__animated " + animation} />
                        <div className='flex flex-row gap-14 w-full justify-evenly m-6'>
                            <button
                            onClick={prevImage}
                            className=" transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                            >
                            ◀
                            </button>

                            <button
                            onClick={nextImage}
                            className=" transform -translate-y-1/2 bg-white/70 px-4 py-2 rounded hover:bg-white shadow"
                            >
                            ▶
                            </button>

                        </div>
                    </div>
            </Class>
        </div>
    )
}