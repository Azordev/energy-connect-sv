const toBilling = document.getElementById('billing-tabber');
const toServices = document.getElementById('services-tabber');
const billingTab = document.getElementById('billing');
const servicesTab = document.getElementById('services');

toBilling.addEventListener('click', e => {
    e.preventDefault();
    const isActive = toBilling.hasAttribute('active');
    if (isActive){
        throw 'Already on that tab'
    }
    toBilling.removeAttribute('active');
    toServices.setAttribute('active', '');
    billingTab.setAttribute('hidden', '');
    servicesTab.removeAttribute('hidden');
    console.log(isActive?true:false,'Billing', toBilling)
});
toServices.addEventListener('click', e => {
    e.preventDefault();
    const isActive = toServices.hasAttribute('active');
    if (isActive){
        throw 'Already on that tab'
    }
    toServices.removeAttribute('active');
    toBilling.setAttribute('active', '');
    servicesTab.setAttribute('hidden', '');
    billingTab.removeAttribute('hidden');
    console.log(isActive?true:false,'Services', toServices)
})