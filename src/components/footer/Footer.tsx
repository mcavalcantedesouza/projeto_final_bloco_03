import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer(){

    return (
        <>
           <section className="flex flex-col items-center bg-indigo-900 text-white py-3">
                <h1 className="font-bold text-2xl">Farmacia da Leste</h1>
                <h2>Projeto Ficticio feito por Michel Cavalcante | Copyright &copy;</h2>
                <p>Acesse minhas redes sociais</p>
                <div className="flex flex-row gap-2">
                    <a href="https://www.linkedin.com/in/dev-cavalcante/" target="_blank"><LinkedinLogo size={32} /></a>
                    <a href="https://www.instagram.com/_michel.cavalcante/" target="_blank"><InstagramLogo size={32} /></a>
                    <a href="https://github.com/mcavalcantedesouza" target="_blank"><GithubLogo size={32} /></a>
                </div>
            </section>
        </>
    )
}

export default Footer;