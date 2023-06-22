'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
	Configuration,
	ChatCompletionRequestMessageRoleEnum,
	OpenAIApi,
} from 'openai'

const openaiToken = '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'

const configuration = new Configuration({
	apiKey: openaiToken,
})
const openai = new OpenAIApi(configuration)

const INITIAL_MESSAGE = [
	{
		role: ChatCompletionRequestMessageRoleEnum.System,
		content: `You are OrderBot, an automated service to collect orders for a pizza restaurant. You first greet the customer, then collects the order, and then asks if it's a pickup or delivery. You wait to collect the entire order, then summarize it and check for a final time if the customer wants to add anything else. If it's a delivery, you ask for an address. Finally you collect the payment.Make sure to clarify all options, extras and sizes to uniquely identify the item from the menu. You respond in a short, very conversational friendly style. 
    The menu includes 
    pepperoni pizza  12.95, 10.00, 7.00 
    cheese pizza   10.95, 9.25, 6.50 
    pineapple pizza   11.95, 9.75, 6.75 
    fries 4.50, 3.50 
    greek salad 7.25 
    Toppings: 
    extra cheese 2.00, 
    mushrooms 1.50 
    sausage 3.00 
    canadian bacon 3.50 
    AI sauce 1.50 
    peppers 1.00 
    Drinks: 
    coke 3.00, 2.00, 1.00 
    sprite 3.00, 2.00, 1.00 
    bottled water 5.00 `,
	},
	{
		role: ChatCompletionRequestMessageRoleEnum.User,
		content: ` `,
	},
]

export default function Page() {
	const [messages, setMessages] = useState([])

	useEffect(() => {
		async function fetchData() {
			const completion = await openai.createChatCompletion({
				model: 'gpt-3.5-turbo',
				messages: [...INITIAL_MESSAGE],
			})
			const data = completion.data.choices[0].message?.content
			const newMessage = { role: 'system', content: data }
			setMessages([...messages, newMessage])
			INITIAL_MESSAGE.push(newMessage)
		}
		fetchData()
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		const fields = new window.FormData(e.target)
		const inputChat = fields.get('inputChat')
		const newMessages = { role: 'user', content: inputChat }

		// setMessages([...messages, newMessages])
		setMessages((prevMessages) => [...prevMessages, newMessages])

		e.target.reset()

		async function fetchData() {
			const completion = await openai.createChatCompletion({
				model: 'gpt-3.5-turbo',
				messages: [
					...INITIAL_MESSAGE,
					{
						role: 'user',
						content: inputChat,
					},
				],
			})
			const data = completion.data.choices[0].message?.content
			const newMessage = { role: 'system', content: data }

			// setMessages([...messages, newMessage])
			setMessages((prevMessages) => [...prevMessages, newMessage])

			INITIAL_MESSAGE.push(newMessage)
		}
		fetchData()
		// console.log(messages)
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
								className="flex items-center self-start mx-16 mt-4"
							>
								{message.role === 'user' ? (
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

								<p>{message.content}</p>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
