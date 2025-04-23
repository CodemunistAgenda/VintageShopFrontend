// src/components/Home/HighlightsSection.tsx
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 1.5rem auto 0;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

const ProductCategory = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: black;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const HighlightsSection = () => {
  const products = [
    {
      id: 1,
      image: '/images/products/sessel.jpg',
      category: 'VINTAGE-MÖBEL',
      title: 'Dänischer Sessel, 1960er Jahre',
      price: '349,00',
      badge: 'Neu'
    },
    {
      id: 2,
      image: '/images/products/handtasche.jpg',
      category: 'UPCYCLING',
      title: 'Handtasche aus Vintage-Vinyl',
      price: '89,00',
      badge: 'Bestseller'
    },
    {
      id: 3,
      image: '/images/products/brosche.jpg',
      category: 'ACCESSOIRES',
      title: 'Art Deco Brosche, vergoldet',
      price: '129,00',
      badge: 'Limitiert'
    },
    {
      id: 4,
      image: '/images/products/lampe.jpg',
      category: 'DESIGNER-KOLLEKTIONEN',
      title: 'Retro-inspirierte Lampe "Aurora"',
      price: '199,00',
      badge: ''
    }
  ];

  return (
    <SectionContainer>
      <SectionTitle>Ausgewählte Highlights</SectionTitle>
      <SectionSubtitle>Unsere beliebtesten Fundstücke dieser Woche</SectionSubtitle>
      
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            {product.badge && <Badge>{product.badge}</Badge>}
            <ProductImage src={product.image} alt={product.title} />
            <ProductInfo>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>€{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};

export default HighlightsSection;