import { useState } from 'react';

function Panel({ title, children, isActive, onShow}) {
  return (
    <div className='mx-16'>
      <section className="panel bg-gradient-to-tr from-lightBlue to-blue-200 pl-4 py-2 rounded-sm my-2 text-gray-100">
      <h3 className='font-semibold text-black'>{title}</h3>
      {isActive ? (
      <p className='text-sm text-gray-800 font-semibold leading-4 px-5 py-5'>{children}</p>
        ) : (
      <button 
      className='bg-slate-700 px-2 text-[13px] rounded-md transition-all duration-300 ease-out hover:cursor-pointer hover:text-[14px]' 
      onClick={onShow}
    >
      Show
    </button>
  )}
</section>

    </div>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2 className='ml-16 py-4 font-bold text-2xl'>Bank Services</h2>
      <div className="service-panel mb-16">
      <Panel 
        title="Personal Banking"  
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Enjoy seamless management of your personal finances with our comprehensive suite of personal banking services. Whether you need to check balances, transfer funds, or set up automatic bill payments, we offer a variety of tools designed to make banking easy and convenient. Access savings and checking accounts, manage debit and credit cards, and take control of your financial future with robust budgeting tools that help you meet your financial goals.
      </Panel>

      <Panel 
        title="Business Banking"  
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        From startups to established enterprises, our business banking solutions are tailored to meet the unique financial needs of your organization. We provide access to business accounts, lines of credit, and loans to help you manage cash flow and fund expansion. Additionally, our treasury management services streamline your payments, payroll, and invoicing processes. Whether you're looking to optimize daily operations or plan for future growth, our business banking services are here to support your enterprise.
      </Panel>

      <Panel 
        title="Loans & Credit"  
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        Achieve your financial goals with flexible loan and credit options designed to fit your needs. Whether you're buying a new home, financing a car, or looking for credit card solutions, we offer competitive rates and personalized terms. Choose from a variety of loan products, including personal loans, auto loans, mortgages, and home equity lines of credit. We also provide credit counseling and tools to help you improve your credit score and manage your debt effectively.
      </Panel>

      <Panel 
        title="Wealth Management"  
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      >
        Plan your financial future with expert guidance and wealth management services. Our team of seasoned advisors offers personalized financial strategies that align with your goals—whether it’s retirement planning, investment management, or estate planning. We provide access to a wide range of investment products, including mutual funds, stocks, bonds, and alternative assets, to help you grow and protect your wealth over time. With our tailored solutions, you can build a legacy for yourself and your family.
      </Panel>

      <Panel 
        title="Online Banking"  
        isActive={activeIndex === 4}
        onShow={() => setActiveIndex(4)}
      >
        Take control of your finances with the convenience of online banking, accessible 24/7 from any device. Monitor your account activity in real-time, make transfers, pay bills, and manage all your financial needs securely from the comfort of your home or office. Our robust security protocols ensure that your transactions are protected, giving you peace of mind. With features like paperless statements and mobile check deposits, managing your finances has never been easier.
      </Panel>

      <Panel 
        title="Mobile Banking"  
        isActive={activeIndex === 5}
        onShow={() => setActiveIndex(5)}
      >
        Experience the power of banking at your fingertips with our state-of-the-art mobile banking app. Stay connected to your finances on the go—check balances, transfer funds, pay bills, and deposit checks directly from your smartphone or tablet. Our mobile app also provides instant notifications for account activity, helping you stay on top of your money at all times. Whether you're at home or traveling, you’ll have access to all the banking tools you need, whenever you need them.
      </Panel>

      <Panel 
        title="Insurance Services"  
        isActive={activeIndex === 6}
        onShow={() => setActiveIndex(6)}
      >
        Secure your future and protect what matters most with our wide range of insurance services. From life and health insurance to property and casualty coverage, we offer tailored solutions to meet your needs at every stage of life. Our comprehensive plans ensure that your loved ones are taken care of in the event of unforeseen circumstances, while our property insurance safeguards your home and assets. With flexible coverage options and expert advice, you can choose the protection that’s right for you.
      </Panel>

      </div>
    </>
  );
}
