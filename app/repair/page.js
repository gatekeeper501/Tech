import RepairForm from '../../components/RepairForm';
import SupportMethodology from '../../components/SupportMethodology';

export const metadata = {
  title: 'Computer & Device Repair Services | Little Rock & Central Arkansas',
  description: 'Expert diagnostics, screen replacement, and hardware repair for laptops, tablets, and mobile devices in Little Rock and Central Arkansas.',
};

export default function RepairPage() {
  return (
    <div className="flex flex-col">
      {/* 1. The original repair intake form */}
      <RepairForm />
      
      {/* 2. The newly mounted troubleshooting methodology and case study */}
      <SupportMethodology />
    </div>
  );
}