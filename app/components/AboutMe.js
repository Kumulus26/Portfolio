const AboutMe = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-6xl font-light text-gray-900 mb-12">About Me</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-light text-gray-700 mb-4">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed">
              Je suis un développeur passionné par la création d'expériences web 
              uniques et immersives. Spécialisé dans le développement front-end,
              je combine créativité et expertise technique pour donner vie à des
              interfaces innovantes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light text-gray-700 mb-4">What I Do</h3>
            <p className="text-gray-600 leading-relaxed">
              Je crée des sites web et applications modernes en utilisant les
              dernières technologies. Mon approche met l'accent sur la performance,
              l'accessibilité et l'expérience utilisateur pour délivrer des
              projets de qualité.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe 