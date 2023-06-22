import Image from "next/image";

export default function MenuCard({srcLink, altText, title, price}) {
  return (
    <div>
					<Image
						src={srcLink}
						alt={altText}
						width={250}
						height={250}
					/>
					<h5>{title}</h5>
					<p>
						<b>{price}</b> S/.
					</p>
				</div>
  )
}