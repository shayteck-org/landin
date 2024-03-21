import { editMode } from "@/types/model";
import styles from "@/styles/editor.module.scss";

const Editor: React.FC<editMode> = ({ edit, setEdit, setMode }) => {
  return (
    <form className={styles.editor} onSubmit={() => setMode("stable")}>
      <input
        type="text"
        onChange={(e) => setEdit(e.target.value)}
        value={edit}
      />
      <button type="submit">✅</button>
    </form>
  );
};

export default Editor;
