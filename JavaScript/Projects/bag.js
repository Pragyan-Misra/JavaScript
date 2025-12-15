
let bagItemObjects;
onload();
function onload() {
    loadBagItems();
    displayBagItems();
    console.log(bagItemObjects);
    displayBagSummary();
}
function displayBagItems() {
    let containerElement=document.querySelector('.bagItemsContainer');
    containerElement.innerHTML= generateItemHtml(bagItemObjects);

}
function generateItemHtml(items) {
    innerhtml=''
    items.forEach(item => {
        innerhtml+= ` 
        <div class="bagItemConaitner">
            <div class="itemLeftPart">
                <img class="bagItemImg" src="${item.image}">
            </div>
            <div class="itemRightPart">
                <div class="company">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price-contianer">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <spna class="discount-percentage">(${item.discount_percentage}% OFF)</spna>
                </div>
                <div class="return-period">
                    <span class="return-period-day">${item.return_period}days</span> return available
                </div>
                <div class="delivery-details">
                    Delivered by
                    <span class="delivery-details-days">${item.delivery_date}</span>
                </div>
            </div>
            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
        </div>`;
        
    });
    return innerhtml; 
}
function removeFromBag(id) {
    bagItem=bagItem.filter(bagItemId => bagItemId != id);
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
    loadBagItems();
    displayBagItems();
    displayBagItem();
    displayBagSummary();
}
function loadBagItems() {
    bagItemObjects= bagItem.map(itemID=>{
        for(let i =0; i<items.length;i++){
            if(itemID==items[i].id) {
                return items[i];
            }
        }
    })
}
function displayBagSummary() {
    let con;
    let bagSummaryElement=document.querySelector('.bagSummary');
    let totalprice=0, disprice=0;
    bagItemObjects.forEach(price => {
        totalprice+=price.original_price;
        disprice+=price.current_price;
    });
    disprice=totalprice-disprice;
    if (bagItem.length == 0) {
        con=0;   
    } else {
        con=99;
    }
    bagSummaryElement.innerHTML=`
    <div class="bag-details-container">
        <div class="price-header">PRICE DETAILS ( ${bagItemObjects.length} Items)</div>
        <div class="price-item">
            <span class= "price-item-tag">Total MRP</span>
            <span class= "price-item-value">Rs ${totalprice}</span>
        </div>
        <div class="price-item">
            <span class="price-item-tag">Discount on MRP</span>
            <span class="price-item-value-base-discount">Rs ${disprice}</span>
        </div>
        <div class="price-item">
            <span class="price-item-tag">Convenience Fees</span>
            <span class="price-item-value">Rs ${con}</span>
        </div>
        <hr>
        <div class="price-footer">
            <span class="price-item-tag">Total Amount</span>
            <span class="price-item-value">Rs ${totalprice-disprice}</span>
        </div>
    </div>
    <button class="btn-place-order">
        <div class="css-x" onclick="empty()">PLACE ORDER</div>
    </button>`;
}
function empty() {
    bagItem=[];
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
    loadBagItems();
    displayBagItems();
    displayBagSummary();
    displayBagItem();
}