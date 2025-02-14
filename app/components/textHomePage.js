import { motion } from 'framer-motion';

const TextHomePage = () => {
    return (
        <>
            <motion.div 
                className="absolute top-[15%] left-[10%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ fontFamily: 'inter, sans-serif' }}
            >
                <p className="text-black/80 font-bold text-3xl">Studying development at Efrei, Villejuif</p>
                <p className="text-black/80 font-bold text-3xl">AWS Cloud Practitioner Certified</p>
            </motion.div>

            <motion.div 
                className="absolute bottom-[20%] right-[10%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{ fontFamily: 'inter, sans-serif' }}
            >
                <p className="text-black/80 font-bold text-3xl">Passionate about Development and Cloud.</p>
                <p className="text-black/80 font-bold text-3xl font-geistSans">35mm film photographer.</p>
            </motion.div>
        </>
    );
};

export default TextHomePage;