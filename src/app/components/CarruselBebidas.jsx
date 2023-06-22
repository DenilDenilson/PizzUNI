import MenuCard from "./MenuCard";

export default function CarruselBebidas() {
  return (
    <div>
      <h3>Bebidas</h3>
      <section className="flex gap-8">
        <MenuCard
          title={'Coca cola'}
          srcLink={
            'https://i.imgur.com/OPnPEMr.jpg'
          }
          altText={'Imagen de una pizza acompañada de una soda de coca cola'}
          price={'3.00, 2.00, 1.00'}
        />
        <MenuCard
          title={'Sprite'}
          srcLink={
            'https://i.imgur.com/C3YLVQF.png'
          }
          altText={'Imagen de una pizza acompañada de una soda de sprite'}
          price={'3.00, 2.00, 1.00'}
        />
        <MenuCard
          title={'Agua'}
          srcLink={
            'https://i.imgur.com/49ulEoH.jpg'
          }
          altText={'Imagen de una pizza acompañada de una botella de agua'}
          price={'3.00'}
        />
      </section>
    </div>
  )
}