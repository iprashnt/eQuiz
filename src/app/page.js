import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#002e9e] mt-6 sm:mt-8 lg:mt-10">
          Required Training
        </h3>
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#646464] mt-3 sm:mt-4 lg:mt-5">
          Complete your mandatory corporate training modules
        </h4>
      </div>

      <div className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Card
            cardTitle="Fire Safety Training"
            cardDescription="Annual workplace fire safety and emergency procedures training"
            cardDate="May 30, 2025"
            cardProgress={25}
            cardImage="https://flowbite.com/docs/images/blog/image-1.jpg"
            pillBgColor="#fee2e1"
            pillTextColor="#da181a"
            pillText="High Priority"
          />
          <Card
            cardTitle="Sexual Harassment Prevention"
            cardDescription="Mandatory training on workplace harassment prevention"
            cardDate="June 15, 2025"
            cardProgress={75}
            cardImage="https://flowbite.com/docs/images/blog/image-1.jpg"
            pillBgColor="#fef3c7"
            pillTextColor="#e08c37"
            pillText="Required"
          />
          <Card
            cardTitle="Anti-Bullying Training"
            cardDescription="Creating a respectful workplace environment"
            cardDate="July 1, 2025"
            cardProgress={50}
            cardImage="https://flowbite.com/docs/images/blog/image-1.jpg"
            pillBgColor="#fef3c7"
            pillTextColor="#e08c37"
            pillText="Required"
          />
          <Card
            cardTitle="Annual Compliance"
            cardDescription="Essential regulatory compliance and ethics training"
            cardDate="May 15, 2025"
            cardProgress={0}
            cardImage="https://flowbite.com/docs/images/blog/image-1.jpg"
            pillBgColor="#fee2e1"
            pillTextColor="#da181a"
            pillText="High Priority"
          />
        </div>
      </div>
    </>

  );
}
