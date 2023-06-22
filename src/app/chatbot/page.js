'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Page() {
	const [messages, setMessages] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		const fields = new window.FormData(e.target)
		const inputChat = fields.get('inputChat')
		const newMessages = { role: 'customer', message: inputChat }
		setMessages([...messages, newMessages])
		e.target.reset()
	}

	return (
		<>
			<div className="mx-auto mt-8 outline outline-2 outline-slate-400 w-[750px] h-[700px] flex flex-col-reverse items-center py-2">
				<form className="" onSubmit={handleSubmit}>
					<input
						name="inputChat"
						type="text"
						placeholder="Ingrese su pedido"
						className="max-w-2xl w-[500px]"
					/>
					<button className="bg-slate-400 w-[100px] mx-2 mt-8">Enviar</button>
				</form>
				<div className="self-start">
					{messages.map((message, index) => {
						return (
							<div
								key={index}
								className="flex items-center self-start ml-16 mt-4"
							>
								{message.role === 'customer' ? (
									<Image
										src="https://i.imgur.com/Hq8No80.png"
										alt="Imagen de perfil del chatbot"
										width={50}
										height={50}
										className="rounded-full mr-8"
									/>
								) : (
									<Image
										src="https://i.imgur.com/jNcqgBj.png"
										alt="Imagen de perfil del chatbot"
										width={50}
										height={50}
										className="rounded-full mr-8"
									/>
								)}

								<p>{message.message}</p>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
