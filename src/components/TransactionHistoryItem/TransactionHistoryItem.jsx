import css from "./TransactionHistoryItem.module.css";

export const TransactionHistoryItem = ({
  item: { type, amount, currency },
}) => {
  return (
    <tr>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td className={css.currency}>{currency}</td>
    </tr>
  );
};
