import MenuCard from "./MenuCard";

export default function CarruselMenu() {
  return(
    <div>
    	<h3 id="menu">Menú</h3>
			<section className="flex gap-8">
				<MenuCard
					title={'Pizza de peperoni'}
					srcLink={
						'https://i.imgur.com/NivYlbk.png'
					}
					altText={'Pizza de peperoni'}
					price={'12.00, 10.00, 7.00'}
				/>
				<MenuCard
					title={'Pizza de queso'}
					srcLink={
						'https://i.imgur.com/28fLvX8.png'
					}
					altText={'Pizza de queso'}
					price={'10.00, 9.00, 6.50'}
				/>
				<MenuCard
					title={'Pizza de piña'}
					srcLink={
						'https://i.imgur.com/opkdwFe.png'
					}
					altText={'Pizza de piña'}
					price={'12.00, 10.00, 7.00'}
				/>
				<MenuCard
					title={'Papas fritas'}
					srcLink={
						'https://i.imgur.com/uqfD3FI.png'
					}
					altText={'Papas fritas'}
					price={'5.00, 3.50'}
				/>
				<MenuCard
					title={'Ensalada griega'}
					srcLink={
						'https://i.imgur.com/TgQPC06.png'
					}
					altText={'Ensalada griega'}
					price={'7.00'}
				/>
			</section>
    </div>
  )
}