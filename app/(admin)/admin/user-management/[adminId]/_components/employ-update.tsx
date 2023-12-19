"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User } from "@prisma/client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name is required",
  }),
  title: z.string().min(3, {
    message: "Title is required",
  }),
  role: z.string().min(3, {
    message: "role is required",
  }),
});

interface EmployUpdateProps {
  options: { label: string; value: string }[];
  initialData: User | null;
}

const EmployUpdate: React.FC<EmployUpdateProps> = ({
  initialData,
  options,
}) => {
  const params = useParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      title: initialData?.title || "",
      role: initialData?.role || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/register/${params.adminId}`, values);
      toast.success("Employ  Updated");
      router.push("/admin/user-management");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-2xl">Update Employ Details</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 mt-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Combobox options={options} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-end">
              <Button
                type="submit"
                className="mt-2"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  <>Save Changes</>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default EmployUpdate;
