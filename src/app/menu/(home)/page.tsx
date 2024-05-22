import { PageHeaderHeading } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function MenuIndex() {
  return (
    <div>
      <PageHeaderHeading as="h3" size="sm">
        Lanches
      </PageHeaderHeading>
      <div className="mt-4 grid grid-cols-1  gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Card
            key={idx}
            className="flex rounded-sm bg-muted/40 p-4 hover:bg-muted/45"
          >
            <div className="flex flex-1 flex-col">
              <div className="grid h-full justify-between">
                <div>
                  <div className="flex justify-between text-base font-medium">
                    <h3>
                      <a href={"#"}>Produto {idx + 1}</a>
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Descrição de teste do lanche
                  </p>
                </div>
                <p className="grid items-end font-semibold text-primary ">
                  R$ {idx + 1 * 12},00
                </p>
              </div>
            </div>

            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-border">
              <Image
                alt="Image do produto"
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                className="h-full w-full object-cover object-center"
                width={90}
                height={90}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
