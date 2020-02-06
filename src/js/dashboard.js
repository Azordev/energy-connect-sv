const toBilling = document.getElementById('billing-tabber');
const toServices = document.getElementById('services-tabber');
const billingTab = document.getElementById('billing');
const servicesTab = document.getElementById('services');

const selectServices = (e) => {
    e.preventDefault();
    const isActive = toServices.hasAttribute('active');
    if (isActive){
        throw 'Already on that tab'
    }
    toBilling.removeAttribute('active');
    toServices.setAttribute('active', '');
    billingTab.setAttribute('hidden', '');
    servicesTab.removeAttribute('hidden');
};

const selectBilling = (e) => {
    e.preventDefault();
    const isActive = toBilling.hasAttribute('active');
    if (isActive){
        throw 'Already on that tab'
    }
    toServices.removeAttribute('active');
    toBilling.setAttribute('active', '');
    servicesTab.setAttribute('hidden', '');
    billingTab.removeAttribute('hidden');
}

toServices.addEventListener('click', selectServices);
toBilling.addEventListener('click', selectBilling);

document.getElementById('home-footer-button').addEventListener('click', selectServices);
document.getElementById('billing-footer-button').addEventListener('click', selectBilling);