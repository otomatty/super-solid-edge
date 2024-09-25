// https://kobalte.dev/docs/core/components/combobox
// テキスト入力とリストボックスを組み合わせて、ユーザーがオプションのリストをクエリに一致する項目にフィルタリングできるようにします
// 検索機能付きのセレクトボックス

import { Combobox } from "@kobalte/core/combobox";
import {
  comboboxRoot,
  comboboxControl,
  comboboxItem,
  comboboxItemIndicator,
  comboboxInput,
  comboboxTrigger,
  comboboxIcon,
  comboboxContent,
  comboboxListbox,
} from "./Combobox.css";
import { BiSolidCheckCircle } from "solid-icons/bi";
import { BiRegularSort } from "solid-icons/bi";

interface MyComboboxProps {
  options: string[];
  placeholder: string;
}

const ALL_OPTIONS = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];

export const MyCombobox = ({ options, placeholder }: MyComboboxProps) => {
  return (
    <Combobox
      class={comboboxRoot}
      options={options || ALL_OPTIONS}
      placeholder={placeholder}
      itemComponent={(props) => (
        <Combobox.Item item={props.item} class={comboboxItem}>
          <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
          <Combobox.ItemIndicator class={comboboxItemIndicator}>
            <BiSolidCheckCircle />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      )}
    >
      <Combobox.Control class={comboboxControl} aria-label="Fruit">
        <Combobox.Input class={comboboxInput} />
        <Combobox.Trigger class={comboboxTrigger}>
          <Combobox.Icon class={comboboxIcon}>
            <BiRegularSort />
          </Combobox.Icon>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Portal>
        <Combobox.Content class={comboboxContent}>
          <Combobox.Listbox class={comboboxListbox} />
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox>
  );
};
