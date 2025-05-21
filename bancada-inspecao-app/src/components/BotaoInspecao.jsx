import { Button } from "./ui/button.jsx";
import { atualizarLinha, calcularDiferencas } from "../utils/chartUtils";

export default function BotaoInspecao({ chart, blueData, redData, id, disabled }) {
  const handleClick = () => {
    atualizarLinha(chart, blueData, 0, () => {
      atualizarLinha(chart, redData, 1, () => {
        calcularDiferencas(chart);
      });
    });
  };

  return (
    <Button id={id} onClick={handleClick} disabled={disabled}>
      Iniciar Inspeção
    </Button>
  );
}
