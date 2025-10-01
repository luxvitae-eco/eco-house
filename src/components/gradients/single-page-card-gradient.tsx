export function SinglePageCardGradient() {
  return (
    <>
      <div className={'single-page-background-base single-page-card-hard-blur'} />
      <div className={'single-page-background-base single-page-card-vertical-hard-blur'} />
      <div
        className={
          'single-page-background-base single-page-card-small-soft-blur md:single-page-card-medium-soft-blur single-page-card-soft-blur'
        }
      />
      <div
        className={
          'single-page-background-base single-page-card-yellow-highlight single-page-card-small-yellow-highlight md:single-page-card-medium-yellow-highlight'
        }
      />
    </>
  );
}
