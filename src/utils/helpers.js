export const formatPrice = (price) => {
    return new Intl.NumberFormat('ne-NP', {
      style: 'currency',
      currency: 'NPR'
    }).format(price*115);
  }