import { motion } from 'framer-motion';

const TextHomePage = () => {
    return (
        <>
            {/* Premier bloc de texte avec animation */}
            <motion.div 
                className="absolute top-[15%] left-[10%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ fontFamily: 'vercetti, sans-serif' }}
            >
                <p className="text-black/80 font-bold text-xl">Studying development at Efrei, Villejuif</p>
                <p className="text-black/80 font-bold text-xl">AWS Cloud Practitioner Certified</p>
            </motion.div>

            {/* Deuxième bloc de texte avec animation */}
            <motion.div 
                className="absolute bottom-[20%] right-[10%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{ fontFamily: 'vercetti, sans-serif' }}
            >
                <p className="text-black/80 font-bold text-xl">Passionate about Development and Cloud.</p>
                <p className="text-black/80 font-bold text-xl font-geistSans">35mm film photographer.</p>
            </motion.div>
        </>
    );
};

export default TextHomePage;