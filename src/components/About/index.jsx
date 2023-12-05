import { Section } from "../staticComponents";
import "./index.scss";

const About = () => {
  return (
    <Section className="app__about h-max">
      <h2 className="text-primary-700 font-bold text-center w-full mb-8">NE JEMI KETU PER JU</h2>
      <div className="grid xl:grid-cols-3 xxl:gap-6 gap-4">
        <Card
          title="Mbeshtetje nga Ekspertet"
          description="Ne besojme se ofrimi i nje mbeshtetje te shkelqyeshme per klientet eshte thelbesore. Prandaj kemi nje ekip te dedikuar gati per t'ju ndihmuar me cdo pyetje apo shqetesim qe mund te keni. Nese keni nevoje per ndihme ne zgjedhjen e pajisjeve te duhura ose zgjidhjen e nje ceshtjeje, ne jemi ketu per ju. Qellimi yne eshte te sigurojme qe te keni pervojen me te mire te mundshme me kompanine tone."
        />
        <Card
          title="Ndihmoni veten dhe te tjere"
          description="Feedback-u juaj eshte ndihmues per ne dhe deshirojme qe te degjojme nga ju. Nese keni nje ide per nje pajisje te re ose dizajn, na kontaktoni. Duke ndare mendimet tuaja me ne, ne mund te krijojme produkte dhe pervoja me te mira per ju dhe te tjere. Nee jemi ketu per t'ju degjuar. Mos hezitoni te na shkruani me sugjerimet tuaja dhe ndihmoni ne te vazhdojme te inovojme dhe te permiresojme."
        />
        <Card
          title="Rekomandime"
          description="Zgjedhja e pajisjeve te duhura per gaming mund te jete e veshtire, sidomos me aq shume opsione ne treg. Por me rekomandimet tona personalizuar, ju nuk duhet te shkoni vetem. Ne do te ndalojme dhe kuptojme nevojat dhe preferencat tuaja dhe do t'ju udhezojme ne pajisjet perfekte per ju. Jemi ketu per t'ju ndihmuar te merrni nje vendim te informuar dhe te perfitoni maksimumin nga blerja juaj."
        />
      </div>
    </Section>
  );
};

const Card = (props) => {
  const { title, description } = props;
  return (
    <div className="card xxl:p-6 p-4 relative">
      <p className="xl:mb-4 mb-1 font-bold">{title}</p>
      <span className="font-small">{description}</span>
    </div>
  );
};

export default About;
