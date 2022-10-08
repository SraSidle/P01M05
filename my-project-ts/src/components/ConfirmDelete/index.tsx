import OverlayModal from "components/OverlayModal";
import { useGames } from "hooks/useGame";
import * as S from "./style";

type confirmDelProps = {
  closeModal: any,
  gameToDelete: any,
} 


function ConfirmDelete({closeModal, gameToDelete} : confirmDelProps) {

  const { deleteGame } = useGames();

  const handleDelete = async(gameToDelete: string) => {
    deleteGame(gameToDelete);
    closeModal();
  }

  return(
    <OverlayModal
      closeModal={closeModal}
    > <S.DelBody>
      <p className="text__p"> Tem certeza que deseja remover esse Jogo?</p>
      <S.Choice className="choice">
        <S.Button className="yes" onClick={() => handleDelete(gameToDelete)}>
          Sim
        </S.Button>
        <S.Button className="no" onClick={closeModal}>
          Não
        </S.Button>
      </S.Choice>
      <p className="alert">
        <i className="bi bi-info-circle"></i> Em caso de remoção. Essa ação não poderá ser desfeita.
      </p>
    </S.DelBody>
    </OverlayModal>
  );
}

export default ConfirmDelete;