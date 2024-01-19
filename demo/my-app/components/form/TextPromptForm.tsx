import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  textPrompt: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export type TextPromptFormInputs = {
  textPrompt: string;
};

export const TextPromptForm: FC<{
  onSubmit: SubmitHandler<TextPromptFormInputs>;
  isExecuting: boolean;
}> = ({ onSubmit, isExecuting }) => {
  const form = useForm<TextPromptFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      textPrompt: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex items-center gap-4 w-3/4 m-auto ">
          <FormField
            control={form.control}
            name="textPrompt"
            render={({ field, fieldState: { error } }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="生成したい画像の特徴を入力してください"
                    {...field}
                  />
                </FormControl>
                {error && <FormMessage>{error.message}</FormMessage>}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isExecuting}
            className="flex-shrink-0"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
