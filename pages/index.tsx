import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import Section from '../components/Section';
import { AiFillHome } from 'react-icons/ai';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import RecomendationCard from '../components/RecomendationCard';
import privateProjects from '../public/private-projects.json';
import ProjectCard from '../components/ProjectCard';
import 'lostjs/common';
import { IProjectsRef } from '../types';
import { useGlobal } from 'react-simplify/common';
import SectionDescriber from '../components/SectionDescriber';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import recomendations from '../public/recomendations.json';

/* https://codepen.io/devdojo/pen/qBrEQqM */
function togglePageFlip(el: HTMLElement) {
    setAllPagesBack(el);
    // el.classList.toggle('turn');
}

function setAllPagesBack(e: HTMLElement) {
    const pages = document.getElementsByClassName('page');
    const index = Array.from(pages).indexOf(e);
    e.classList.toggle('turn');

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('z-30', 'z-40', 'z-50', 'hidden');
        if (i === index) {
            pages[i].classList.add('z-50');
        } else if (i === index - 1) {
            pages[i].classList.add('z-40');
        } else if (i === index + 1) {
            pages[i].classList.add('z-30');
        } else {
            pages[i].classList.add('hidden');
        }
    }
}


function Page(props: { children: React.ReactNode }) {
    return (
        <div onClick={(e) => togglePageFlip(e.currentTarget)} className='cursor-pointer h-full page absolute duration-1000 flex items-end origin-left w-1/2 transition-transform'>
            {props.children}
        </div>
    );
}

interface IPageContent { type?: 'front' | 'back', background: string, src: string, imgClass?: string, children?: React.ReactNode }

function PageContentTemplate(props: IPageContent) {
    return (
        <div className={`${props.type} flex-center px-2 sm:px-5 md:px-20 absolute w-full h-full bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${props.background})` }}>
            <div className={`w-32 h-32 ${props.imgClass || ''}`}>
                <img src={props.src} />
            </div>
            {props.children}
        </div >
    );
}

function Front(props: IPageContent) {
    return (
        <PageContentTemplate {...{ ...props, type: 'front' }} />
    );
}

function Back(props: IPageContent) {
    return (
        <PageContentTemplate {...{ ...props, type: 'back' }} />
    );
}

const Home: NextPage = () => {
    const refs: React.RefObject<HTMLTableSectionElement>[] = [useRef(null), useRef(null), useRef(null)];
    const [drawProjects, setDrawProjects] = useState(false);
    const projectsRef = useRef<IProjectsRef>({ do: true, index: 1, projects: [] });
    const [projectIndex] = useGlobal('projectIndex', 0);

    useEffect(() => {
        const scrollEvent = (ev: Event) => {
            const section = refs.find((ref) => ref.current && ref.current.getBoundingClientRect().y - 48 === 0);

            if (section === undefined)
                return;
        };

        window.addEventListener('scroll', scrollEvent);

        setDrawProjects(true);

        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    const secondSectionData = [
        '/img/typescript-logo-2020.svg', '/img/slider/typescript.png',
        '/img/axios-logo.png', '/img/slider/axios.png',

        '/img/sass-logo.png', '/img/slider/sass.png',
        '/img/css3-logo.png', '/img/slider/css.png',

        '/img/expressjs-logo.png', '/img/slider/expressjs.png',
        '/img/git-logo.png', '/img/slider/git.png',

        '/img/html5-logo.png', '/img/slider/html.jpg',
        '/img/jquery-logo.png', '/img/slider/jquery.png',

        '/img/js-logo.png', '/img/slider/js.webp',
        '/img/lua-logo.png', '/img/slider/lua.png',

        '/img/mysql-logo.svg', '/img/slider/sql.jpg',
        '/img/nodejs-logo.png', '/img/slider/node.png',

        '/img/react-logo.png', '/img/slider/react.jpg',
        '/img/rest-api-logo.png', '/img/slider/rest-api.png',

        '/img/json-logo.svg', '/img/slider/json.png',
        '/img/autoit-logo.png', '/img/slider/autoit.png',

        '/img/tailwind-css-logo.svg', '/img/slider/tailwind-css.png',
        '/img/nextjs-logo.png', '/img/slider/next.png'
    ];



    function Projects() {
        if (!drawProjects)
            return <></>;

        // const left = privateProjects.at2(projectIndex - 1);
        const center = privateProjects.at2(projectIndex);
        const right = privateProjects.at2(projectIndex + 1);
        const effects = ['project-hide-effect', 'project-show-effect'];

        return (
            <div className='w-full h-full  object-3d'>
                <ProjectCard className='project-hide-effect' {...center} />
                <ProjectCard className='project-show-effect' {...right} />
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Alexander Casas - Portfolio</title>
                <meta name='description' content="Alexander's Portfolio" />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <header className='fixed top-0 w-full h-12 bg-slate-900 z-10'>
                <nav className='flex-center md:justify-end md:pr-3 h-full w-full text-3xl gap-5'>
                    <a href='#home'><AiFillHome className='cursor-pointer hover:scale-110' /></a>
                    <a href='#tecnologies'><BsFillBriefcaseFill className='cursor-pointer hover:scale-110' /></a>
                    <a href='#recomendations'><IoPeopleCircleSharp className='cursor-pointer hover:scale-110' /></a>
                </nav>
            </header>

            {/* Front section */}
            <Section id='home' _ref={refs[0]} className='bg-no-repeat bg-fixed bg-right md:bg-center md:bg-cover flex-center flex-col ' style={{ backgroundImage: 'url("/img/background/html-design-blur.webp")' }}>
                <div className='text-center -translate-y-4 scene-3d'>
                    <div className='object-3d'>
                        <h1 className='text-3xl font-bold mb-3 title-3d'>Alexander Casas</h1>
                    </div>
                    <h2 className='md:text-base font-bold subtitle-i'>Programmer, Designer &amp; Web Developer</h2>
                    <p className='font-bold opacity-0 animate-show delay-3000 ease-out text-zinc-400'>Bringing you development solutions</p>
                </div>
            </Section>

            <Section id='projects' className='bg-zinc-900 scene-3d flex-center text-slate-200 overflow-y-hidden'>
                <SectionDescriber title='Projects' descripton='Some projects i have worked on' />
                <Projects />
            </Section>

            {/* style={{backgroundImage: 'url(/img/background/tecnology.jpg)'}} */}
            <Section id='tecnologies' _ref={refs[1]} className='bg-slate-800 perspective flex justify-end select-none'>
                <SectionDescriber title='Tecnologies' descripton='Here all tecnologies i can use autonomously' color='bg-slate-600' />

                <div className='absolute left-0 w-6/12 flex-center h-full'>
                    <p>Click it! 😈👉</p>
                </div>
                {
                    Object.entries(secondSectionData).map((value, index) => {
                        if (index % 4 !== 0) {
                            return;
                        }

                        return <Page key={index}>
                            <Front src={secondSectionData[index]} background={secondSectionData[index + 1]}>

                            </Front>

                            <Back src={secondSectionData[index + 2]} background={secondSectionData[index + 3]}>

                            </Back>
                        </Page>;
                    })
                }
            </Section>

            <Section id='recomendations' _ref={refs[2]} className='bg-slate-400 overflow-y-scroll w-[calc(100vw*4)] flex snap-x snap-mandatory'>
                <SectionDescriber title='Reviews & Comments' descripton='Some comments and reviews from people that i have worked with' color='bg-green-500' />

                {recomendations.map(recomendation =>
                    <RecomendationCard className={recomendation.bgColor} name={recomendation.name} linkedin={recomendation.linkedin} src={`/img/recomendators/${recomendation.photo}`}>
                        <div className='h-4'>
                            <ImQuotesLeft className='absolute left-3' />
                            <ImQuotesRight className='absolute right-3' />
                        </div>
                        <div className='relative overflow-y-scroll h-28 p-3 text-justify font-bold'>
                            <p>
                                {recomendation.commentary}
                            </p>
                        </div>
                    </RecomendationCard>
                )}
                {/* <RecomendationCard className='bg-pink-400' name='Alejandra Olazagasti' linkedin='https://www.linkedin.com/in/alejandra-olazagasti/' src='/img/recomendators/alejandra-olazagasti.png'>
                    <div className='h-4'>
                        <ImQuotesLeft className='absolute left-3' />
                        <ImQuotesRight className='absolute right-3' />
                    </div>
                    <div className='relative overflow-y-scroll h-28 p-3 text-justify font-bold'>
                        <p>
                            Tuve la oportunidad de ser compañera de Alexander y la fortuna de realizar proyectos a su lado.
                            Es un programador lleno de conocimiento, domina muchos lenguajes de programación así como sus diferentes frameworks y librerías. Es alguien de quien puedes aprender todos los días, ya que siempre está dispuesto a compartir su conocimiento y a guiarte.
                            Tiene talento y muchas habilidades que le permiten identificar errores en el código fácilmente para resolverlo. Lo disingo por ser una persona que está en constante crecimiento personal y profesional, en búsqueda de nuevo conocimiento y aprendizaje.
                            No dudo en que tendrá mucho éxito en su camino como programador, lo recomiendo ampliamente.
                        </p>
                    </div>
                </RecomendationCard>

                <RecomendationCard className='bg-blue-400' name='Jesus Clemente' src='/img/recomendators/jesus-clemente.jpg' linkedin='https://www.linkedin.com/in/jesus-maria-clemente-garcia/'>
                    <div className='h-4'>
                        <ImQuotesLeft className='absolute left-3' />
                        <ImQuotesRight className='absolute right-3' />
                    </div>
                    <div className='relative overflow-y-scroll h-28 p-3 text-justify font-bold'>
                        <p>
                            Con alexander hemos vivido buenos momentos durante el desarrollo de diferentes proyestos, aportando humor compañerismo y sus grandes capacidades en javascript, css, react, vue, sass, entre otras tecnologias para culminar satisfactoriamente cada proyectos.
                        </p>
                    </div>
                </RecomendationCard>
                <RecomendationCard className='bg-stone-400' name='Martin Vergara Téllez' src='/img/recomendators/martin-vergara-tellez.jpg' linkedin='https://www.linkedin.com/in/mart%C3%ADn-vergara-529527245/'>
                    <div className='h-4'>
                        <ImQuotesLeft className='absolute left-3' />
                        <ImQuotesRight className='absolute right-3' />
                    </div>
                    <div className='relative overflow-y-scroll h-28 p-3 text-justify font-bold'>
                        <p>
                            Alexander es un programador dedicado, con una lógica de programación envidiable y tiene grandes habilidades para solucionar problemas. Además tiene liderazgo y aptitudes para el trabajo en equipo y constantemente se esfuerza por mejorar sus habilidades.
                        </p>
                    </div>
                </RecomendationCard>
                <RecomendationCard className='bg-green-400' name='Raúl Gomez' src='/img/recomendators/raul-gomez.jpg' linkedin='https://www.linkedin.com/in/rauljgomez/'>
                    <div className='h-4'>
                        <ImQuotesLeft className='absolute left-3' />
                        <ImQuotesRight className='absolute right-3' />
                    </div>
                    <div className='relative overflow-y-scroll h-28 p-3 text-justify font-bold'>
                        <p>
                            Alexander es un programador demasiado experto y autodidacta, tiene un manejo de lógicas de programación super exacta, tiene un buen manejo de muchos lenguajes y buen manejo para las interfaces y procesos de un proyecto!

                            Como persona, es amigable, extrovertido, audaz, super inteligente y tiene mucha habilidad para la resolución de problemas, responsable y constante.
                        </p>
                    </div>
                </RecomendationCard> */}
            </Section>

            <footer className='fixed bottom-3 left-3 h-8 sm:h-10 flex flex-row gap-3 justify-center w-[calc(100vw-0.75rem*2)] sm:w-auto  cursor-pointer'>
                <a href='https://www.linkedin.com/in/alexnqn/' target='_blank'><img className='transition-all h-full hover:scale-110' src='/img/linkedin-logo.png' alt='linkedin' /></a>
                <a href='https://github.com/Iuriiiii' target='_blank'><img className='animate-bounce transition-all h-full invert  hover:scale-110' src='/img/github-logo.png' alt='github' /></a>
                <a href='mailto:alexandercasasnqn@gmail.com' target='_blank'><img className='transition-all h-full  hover:scale-110' src='/img/email-icon.png' alt='email' /></a>
                <a href='https://join.skype.com/invite/DlbDjk4muZGc' target='_blank'><img className='transition-all h-full  hover:scale-110' src='/img/skype-logo.png' alt='skype' /></a>
            </footer>

            {/* <div className='h-[calc(100vh-64px)] snap-start scroll-mt-16 hidden'></div> */}
        </>
    )
}

export default Home
