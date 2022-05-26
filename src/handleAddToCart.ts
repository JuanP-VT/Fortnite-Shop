export default function handleAddToCart(e: Event) {
  //get itemCard that invoked this call
  const target = e.currentTarget as HTMLButtonElement;
  const parentElem = target.parentNode as HTMLDivElement;
  const itemIndex = parentElem.getAttribute("data-index");
  console.log(itemIndex);
}
