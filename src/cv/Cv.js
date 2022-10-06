import { Competences } from './components/Competences'
import { Experiences } from './components/Experiences'
import { Footer } from './components/Footer'
import { Formations } from './components/Formations'
import { Header } from './components/Header'
import { Informations } from './components/Informations'
import { Interets } from './components/Interets'
import './cv.css'

export const Cv = () => {

    const title = "CV Foulen ben Foulen"

    const profile = "Diplômé d'un master 2 En trepreneuriat et Innovation (Programme Grande Ecole EDHEC), je me tourne ensuite vers le développement informatique et les thématiques liées au web comme l'optimisation du référencement (SEO)."
    const user = {
        nom : "Ben Foulen ",
        prenom : "Ali",
        email : "test@gmail.com",
        adresse : "Rue aaa , Sousse , 4000",
        telephone : 25142514,
        permis : 'B',
        social_media : {
            facebook : 'http://facebook.com',
            twitter : 'http://twitter.com',
            google : 'http://google.com'
        }
     }
    return (

        <>
        {/* afficher le composant Header avec le nom CV Foulen ben Foulen */}
            <Header nom={title} />
            
            <Informations profile={profile} user={user}></Informations>
            <Experiences />
            <Formations />
            <Competences />
            <Interets />

            <Footer />
        </>
    )
}