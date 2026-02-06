"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTransition, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle } from 'lucide-react';

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(50)
})

const delayPromise = (ms = 3000) => new Promise(res => setTimeout(res, ms))

export default function Heuristiques() {
    const [loading, startLoading] = useTransition()
    const [success, setSuccess] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        startLoading(async () => {
            console.log("envoyé")
            await delayPromise()
            setSuccess(true)
            console.log("traité")
            console.log(values)
        })
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto p-8 bg-foreground/20 rounded-lg mt-8">
            <h2 className="text-2xl font-black">🎨Formulaire d'exemple</h2>
            <p className="text-foreground/70">Le formulaire ne sert qu'à présenter les principes fondamentaux de l'UX. Aucune donnée n'est stockée, aucune action ne sera enregistrée.</p>
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormDescription>
                            Nom qui sera affiché.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Votre Email" {...field} />
                        </FormControl>
                        <FormDescription>
                            Adresse email de contact.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Votre message" {...field} />
                        </FormControl>
                        <FormDescription>
                            Votre message.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div>
                <Button type="submit" disabled={loading}>{loading && <LoaderCircle className='animate-spin' />} Envoyer</Button>
            </div>
            {success && <p className="text-green-600">Message envoyé, nous ne vous répondrons pas, c'est un exercice.</p>}
        </form>
    </Form>
}