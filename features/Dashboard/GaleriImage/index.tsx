"use client";

import React from "react";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { ROUTES_PATH } from "@/constants/routes";
import { UploadButton } from "@/lib/uploadthings";
import AlertDelete from "@/components/common/alert-delete";
import ActionChangeImage from "@/components/common/action-change-image";
import ActionLivePreview from "@/components/common/action-live-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGaleriFotoFeature } from "./hook";
import { GaleriFotoCard } from "./components";

const DashboardGaleriImageFeature = () => {
  const {
    isDialogOpen,
    isDialogDeleteOpen,
    isLoading,
    isPendingAdd,
    isPendingEdit,
    isPendingDelete,
    isUpload,
    isEdit,
    setSearch,
    setIsUpload,
    setIsDialogOpen,
    setIsDialogDeleteOpen,
    selectedGaleri,
    search,
    data,
    images,
    form,
    handleDelete,
    handleGaleriClick,
    handleNextPage,
    handlePrevPage,
    handleImageUpload,
    handleDialogClose,
    handleDialogOpen,
    setImages,
    mutateAdd,
    mutateEdit,
    mutateDelete,
  } = useGaleriFotoFeature();

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Galeri Foto</h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="relative col-span-2">
            <HiMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              placeholder="Search"
              className="pl-8"
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button onClick={handleDialogOpen}>Tambah Galeri Foto</Button>
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}
      >
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit" : "Tambah"} Galeri Foto</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Silahkan edit form berikut."
                : "Silahkan isi form berikut untuk menambahkan galeri foto baru."}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className={`${isEdit ? "h-[50vh]" : "h-[40vh]"}`}>
            <Form {...form}>
              <form
                onSubmit={
                  isEdit
                    ? form.handleSubmit(() => mutateEdit())
                    : form.handleSubmit(() => mutateAdd())
                }
                className="grid gap-4 px-3"
              >
                <div>
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                  </FormItem>
                  {images === "" ? (
                    <UploadButton
                      endpoint="imageUploader"
                      onUploadBegin={handleImageUpload}
                      onClientUploadComplete={(res) => {
                        setImages(res[0].url);
                        setIsUpload(false);
                        toast({
                          title: "Image Uploaded",
                          description: "Image has been uploaded successfully",
                        });
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          title: "Image Upload Failed",
                          description: error.message,
                          variant: "destructive",
                        });
                      }}
                    />
                  ) : (
                    <div className="relative flex justify-center gap-2">
                      <Image
                        src={images || "/images/placeholder.jpg"}
                        alt="Galeri foto Created Image"
                        priority
                        width={400}
                        height={400}
                      />
                      <div className="flex flex-col gap-2">
                        <ActionChangeImage
                          action={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setImages("");
                          }}
                        />
                        {isEdit && (
                          <ActionLivePreview
                            href={`${ROUTES_PATH.galeriImage}`}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Judul Galeri Foto"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button variant="secondary" onClick={handleDialogClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isPendingAdd || isUpload || isPendingEdit}
                  >
                    {isEdit
                      ? isPendingEdit
                        ? "Loading..."
                        : "Submit Edit"
                      : isPendingAdd
                        ? "Loading..."
                        : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <ScrollArea className="h-[82vh] pr-2">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : data?.data.results.length === 0 ? (
          <p className="text-center text-gray-500">
            Galeri foto tidak ditemukan
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 gap-y-5 md:grid-cols-3 lg:grid-cols-4">
              {data?.data.results.map((item: any) => (
                <GaleriFotoCard
                  key={item.id}
                  item={item}
                  handleGaleriClick={handleGaleriClick}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            {data?.data.totalPages > 1 && (
              <Pagination className="mt-5 w-full">
                <PaginationContent className="flex w-full justify-between">
                  {data?.data.prevPage !== null && (
                    <PaginationItem>
                      <PaginationPrevious
                        className="cursor-pointer"
                        onClick={handlePrevPage}
                      />
                    </PaginationItem>
                  )}
                  {data?.data.nextPage !== null && (
                    <PaginationItem>
                      <PaginationNext
                        className="cursor-pointer"
                        onClick={handleNextPage}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
        {selectedGaleri !== "" && (
          <AlertDelete
            title="Galeri foto"
            isDialogDeleteOpen={isDialogDeleteOpen}
            setIsDialogDeleteOpen={setIsDialogDeleteOpen}
            mutateDelete={mutateDelete}
            isPendingDelete={isPendingDelete}
          />
        )}
      </ScrollArea>
    </div>
  );
};

export default DashboardGaleriImageFeature;