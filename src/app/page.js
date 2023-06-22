import Image from 'next/image'
import { Fragment } from 'react'
import MenuCard from './components/MenuCard'
import CarruselMenu from './components/CarruselMenu'
import CarruselToppings from './components/CarruselToppings'
import CarruselBebidas from './components/CarruselBebidas'

export default function Home() {
	return (
		<Fragment>
			<nav className="flex justify-between">
				<p>PizzUNI</p>
				<ul className="flex gap-4">
					<li>
						<a href="#sobre-nosotros">Sobre nosotros</a>
					</li>
					<li>
						<a href="#menu">Conoce nuestra carta</a>
					</li>
					<li>
						<a href="/chatbotPage">Chatea con nosotros</a>
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-8">
				<Image
					src="https://i.imgur.com/hAerroc.jpg"
					alt="Pizza UNI"
					width={500}
					height={500}
				/>
				<section id="sobre-nosotros">
					<p className="text-4xl font-bold max-w-lg">
						Bienvenido a PizzUNI - Tu destino de deliciosas pizzas
					</p>
					"Bienvenido(a) a PizzUNI - Tu Destino de Deliciosas Pizzas ¡La mejor
					pizza te espera en PizzUNI! Nos enorgullece ofrecer una experiencia
					gastronómica excepcional, donde la calidad y el sabor se combinan para
					satisfacer todos tus antojos. Ya sea que estés buscando una pizza
					clásica, una creación gourmet o una opción vegetariana, nuestro menú
					tiene algo para todos los amantes de la pizza. Nuestro Menú - Delicias
					que te Harán Volver por Más En PizzUNI, nos apasiona ofrecerte una
					amplia selección de pizzas preparadas con los ingredientes más frescos
					y sabrosos. Nuestro equipo de expertos pizzeros combina ingredientes
					de primera calidad con técnicas artesanales para crear una pizza
					perfecta en cada bocado. Estamos comprometidos a brindarte una
					experiencia culinaria excepcional que te hará regresar por más.
				</section>
			</div>
			<h2>Nuestro platos</h2>
			<div className="flex flex-col gap-8">
				<CarruselMenu />
				<CarruselToppings />
				<CarruselBebidas />
			</div>
		</Fragment>
	)
}
