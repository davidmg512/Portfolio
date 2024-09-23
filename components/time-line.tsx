import { dataAboutPage } from "@/data";

const TimeLine = () => {
    return ( 
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl  md:pb-40 md:pt-20">
                <div className="-my-6">
                    {dataAboutPage.map((data) => (
                        <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
                            <h3 className="mb-1 text-xl md:text-2xl font-bold sm:mb-0">{data.title}</h3>
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-full
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{data.date}</time>
                                <p className="text-xl font-bold text-gray-400">{data.subtitle}</p>
                                
                            </div>
                            <p className={`text-slate-400 ${data.id != 1 && 'hidden'}`}>
                                A lo largo del máster, trabajé en <span className="text-secondary font-semibold">proyectos</span> que me permitieron desarrollar una visión completa del ciclo de vida de las aplicaciones, desde el diseño de interfaces hasta la optimización del rendimiento. <br/> <br/>
                                Mi enfoque siempre ha estado en crear <span className="text-secondary font-semibold">soluciones eficientes</span>, aplicando buenas prácticas y metodologías ágiles para resolver problemas de manera efectiva. <br/> <br/>
                                Mi proyecto de fin de máster fue un <span className="text-secondary font-semibold">sistema de gestión para restaurantes</span>, una solución integral que incluía <span className="text-secondary font-semibold">aplicaciones web, móviles y de escritorio</span>. Este proyecto recibió una calificación de 10, lo que refleja su calidad y el esfuerzo invertido. Trabajé en colaboración con tres compañeros,  lo que me permitió desarrollar importantes habilidades de <span className="text-secondary font-semibold">trabajo en equipo</span> y comunicación, esenciales para coordinar y llevar a cabo proyectos complejos<br/> <br/>
                                Una <span className="text-secondary font-semibold">característica innovadora</span> de este proyecto fue permitir a los clientes hacer pedidos con antelación para que la comida estuviera lista al llegar al restaurante, una idea poco vista en el sector que optimizaba la experiencia del usuario y mejoraba la eficiencia del negocio.
                            </p>
                            <p className={`text-slate-400 ${data.id != 2 && 'hidden'}`}>
                            Durante mi formación en Ingeniería Informática, adquirí una sólida base en programación, estructuras de datos, algoritmos, bases de datos y sistemas operativos. 
                            Aprendí a <span className="text-secondary font-semibold">resolver problemas</span> complejos aplicando principios matemáticos y de lógica, además de familiarizarme con el desarrollo de software, redes y arquitectura de computadoras. <br/><br/>
                            Estas bases técnicas me han permitido desarrollar una <span className="text-secondary font-semibold">mentalidad analítica</span> y una capacidad para adaptarme a diferentes tecnologías y lenguajes, lo que ha sido fundamental para mi <span className="text-secondary font-semibold">crecimiento</span> en el ámbito del desarrollo frontend.
                            </p>
                            <p className={`text-slate-400 ${data.id != 3 && 'hidden'}`}>
                                Mi interés por la informática comenzó durante mis años de bachillerato, donde empecé a explorar los conceptos clave del área. 
                                Durante este tiempo, desarrollé una <span className="text-secondary font-semibold">comprensión sólida</span> de los fundamentos de la tecnología, abarcando tanto el funcionamiento del hardware como el software. 
                                Esta experiencia inicial despertó mi curiosidad y pasión por el desarrollo, que más tarde me llevaría a especializarme en el ámbito frontend.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default TimeLine;
