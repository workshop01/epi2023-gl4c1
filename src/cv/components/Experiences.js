import React from 'react'

export const Experiences = () => {
  return (
    <section>
                <h2>Expériences professionnelles</h2>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/pierre.png" alt="Logo de Pierre Giraud" /></a>
                    </div>
                    <div className="exp-info">
                        <h3>Créateur</h3>
                        <h4>Pierre Giraud</h4>
                        <h4>Avril 2014 - Aujourd'hui</h4>
                    </div>
                    <div className="exp-desc">
                        <p>Créateur des sites pierre-giraud.fr puis pierre-giraud.com
                            début 2015 sur lesquels je partage mes formations complète en
                            programmation, optimisation du référencement, etc.</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/legalplace.png" alt="Logo de LegalPlace" /></a>
                    </div>
                    <div className="exp-info">
                        <h3>Responsable SEO et contenu</h3>
                        <h4>LegalPlace</h4>
                        <h4>Novembre 2017 - Décembre 2018</h4>
                    </div>
                    <div className="exp-desc">
                        <p>Responsable SEO du site et plus globalement de la stratégie
                            de production de contenu : recherche de mots clefs, réécriture,
                            contrôle qualité du contenu publié, etc.</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-logo">
                        <a href="/#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/prestashop.png" alt="Logo de PrestaShop" /></a>
                    </div>
                    <div className="exp-info">
                        <h3>Stage marketing</h3>
                        <h4>PrestaShop</h4>
                        <h4>Mai 2013 - Novembre 2013</h4>
                    </div>
                    <div className="exp-desc">
                        <p>Contrôle de la qualité et de l'intégrité des modules proposés,
                            modernisation de la marketplace & passerelle avec la communauté.</p>
                    </div>
                </div>
            </section>
  )
}
