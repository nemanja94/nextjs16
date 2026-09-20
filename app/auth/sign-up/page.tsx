"use client";

import { signUpSchema } from "@/app/schemas/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
	const form = useForm({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		}
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>SignUp</CardTitle>
				<CardDescription>Create Account to get started</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<FieldGroup>
						<Controller 
							name="name" 
							control={form.control} 
							render={({ field, fieldState }) => (
								<Field>
									<FieldLabel>Full Name</FieldLabel>
									<Input placeholder="John Doe" {...field} />
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}>
						</Controller>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	)
}