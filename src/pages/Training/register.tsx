import TrainingForm from "@/app/components/Training/TrainingForm/TrainingForm.component";
import useTranslation from "@/app/hooks/useTranslation";

const PSMapTool = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <TrainingForm />
    </>
  );
};

export default PSMapTool;
