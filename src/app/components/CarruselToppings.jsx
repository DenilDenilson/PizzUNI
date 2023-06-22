import MenuCard from "./MenuCard";

export default function CarruselToppings() {
  return (
    <div>
      <h3>Toppings</h3>
      <section className="flex gap-8">
        <MenuCard
          title={'Queso extra'}
          srcLink={
            'https://i.imgur.com/Luphy64.png'
          }
          altText={'Queso extra'}
          price={'2.00'}
        />
        <MenuCard
          title={'Chanpiñones'}
          srcLink={
            'https://i.imgur.com/azHSQux.png'
          }
          altText={'Chanpiñones'}
          price={'1.50'}
        />
        <MenuCard
          title={'Chorizo'}
          srcLink={
            'https://i.imgur.com/lvkvt6T.png'
          }
          altText={'Chorizo'}
          price={'3.00'}
        />
        <MenuCard
          title={'Tocino'}
          srcLink={
            'https://i.imgur.com/iAEocvd.png'
          }
          altText={'Tocino'}
          price={'3.50'}
        />
        <MenuCard
          title={'Salsa'}
          srcLink={
            'https://i.imgur.com/LlntFwh.png'
          }
          altText={'Salsa'}
          price={'1.50'}
        />
        <MenuCard
          title={'Pimientos'}
          srcLink={
            'https://i.imgur.com/Nkox2mA.png'
          }
          altText={'Pimientos'}
          price={'2.00'}
        />
      </section>
    </div>
  )
}