import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

type CardProps = {
  cardID: number;
  pedidoOrigem: string;
  descricao: string;
  status: string;
  previsaoChegada: string;
  localEntrega: string;
};

const CardPedidos = ({
  cardID,
  pedidoOrigem,
  descricao,
  localEntrega,
  previsaoChegada,
  status,
}: CardProps) => {
  return (
    <div>
      <Card className="w-[450px] border-yellow-300">
        <CardHeader>
          <CardTitle>
            <h2 className="text-2xl">
              Pedido #<span>{cardID}</span>
            </h2>
          </CardTitle>
          <CardDescription>
            <p>
              Pedido de: <span>{pedidoOrigem}</span>
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div>
              <h5 className="font-semibold">{descricao}</h5>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1">
                <h5 className="font-semibold">Status: </h5>
                <span>{status}</span>
              </div>
              <div className="flex gap-1">
                <h5 className="font-semibold">previsão de chegada:</h5>
                <span>{previsaoChegada}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <h5 className="font-semibold">Local de entrega:</h5>
              <span>{localEntrega}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            className="decoration-yellow-400"
            type="button"
            variant="link"
          >
            <h3 className="text-xl text-yellow-400">Confirma entrega</h3>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export { CardPedidos };
