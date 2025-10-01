export function ContactGradients() {
  return (
    <>
      <div className={'hidden md:block'}>
        <div className={'top-left-gradient-background contact-background-base min-h-[1280px]'}></div>
        <div className={'bottom-right-gradient-background contact-background-base min-h-[1280px]'}></div>
        <div className={'grain-background contact-background-base min-h-[1280px]'}></div>
        <div className={'grid-bg contact-background-base min-h-[1280px]'}></div>
      </div>
      <div className={'block md:hidden'}>
        <div className={'contact-mobile-grainy-blur contact-mobile-top-gradient contact-background-base'}></div>
        <div className={'contact-mobile-grainy-blur contact-mobile-bottom-gradient contact-background-base'}></div>
        <div className={'grain-background contact-background-base h-full min-h-screen'}></div>
      </div>
    </>
  );
}
