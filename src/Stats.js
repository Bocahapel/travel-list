/*1. create defaul footer with placeholder
 */
export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>
          <em>Start Add Something</em>
        </p>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? "You got everything on the list"
          : `You have ${numItems} item(s) on the list, and you have already packed ${numPacked} (${numPercentage}%)`}
      </em>
    </footer>
  );
}
