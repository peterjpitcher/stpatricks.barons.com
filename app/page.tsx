import VariantSwitcher from '@/components/VariantSwitcher';
import LandingV1 from '@/components/LandingV1';
import LandingV2 from '@/components/LandingV2';

interface PageProps {
  searchParams: Promise<{ v?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const variant = params.v === '2' ? '2' : '1';

  return (
    <>
      <VariantSwitcher activeVariant={variant} />
      <div style={{ paddingTop: '48px' }}>
        {variant === '2' ? <LandingV2 /> : <LandingV1 />}
      </div>
    </>
  );
}
