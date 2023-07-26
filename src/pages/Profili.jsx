import { useEffect, useState } from "preact/hooks";
import apiActions from "../redux/actions/apiActions";
import Section from "../components/Section";
import Input from "../components/Input/Input";
import Submit from "../components/Submit/Submit";
import { copyToClipboard } from "../helpers";
import fireReduxAction from "../redux/actions/fireReduxAction";
import { INFO, THROW_ALERT } from "../redux/types";

const Profili = () => {
  const [link, setLink] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [affiliateLink, setAffiliateLink] = useState("");
  const [affiliateOrders, setAffiliateOrders] = useState([]);
  const [viewers, setViewers] = useState(0);

  const statusCounts = (affiliateOrders || []).reduce((acc, order) => {
    acc[order?.Status] = (acc[order?.Status] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    apiActions.getAffiliateLinks().then((res) => {
      setLink(res?.data?.[0]?.Code);
      setAffiliateLink(res?.data?.[0]);
    });
    apiActions.getAffiliateOrders().then((res) => {
      const { AffiliateOrders, Viewers } = res?.data || {};
      setViewers(Viewers);
      setAffiliateOrders(AffiliateOrders);
    });
  }, []);

  const onSave = () => {
    setIsSaving(true);
    apiActions
      .createAffiliateLink({ Id: affiliateLink?.Id || 0, Code: link })
      .onSuccess(() => {})
      .finally(() => setIsSaving(false));
  };
  const linkToShare = `${window.location.origin}/code=${affiliateLink?.Code}`;
  return (
    <Section className="app__profili">
      <div className="flex flex-col gap-4">
        <h3 className="mb-4">Profili</h3>
        <div className="flex items-center gap-4">
          <p>Klikime te linkut:</p>
          <p className="bg-white-300 dark:bg-gray-100 rounded-lg p-2 px-4">{viewers}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>Porosite nga kodi jot</p>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                {Object.keys(countLabelsMap).map((key) => (
                  <th key={key} className="text-center py-2 px-4 bg-gray-200 text-gray-800 font-semibold">
                    {countLabelsMap[key]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.keys(countLabelsMap).map((key) => (
                  <td
                    key={key}
                    className="border-r last:border-none border-gray-300 py-2 px-4 bg-white text-gray-800 font-medium text-center"
                  >
                    {statusCounts[key] || 0}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <div className="flex gap-4">
            <Input
              isOutlined
              className="max-w-[300px]"
              type="text"
              id="kodi"
              name="kodi"
              autoComplete="kodi"
              placeholder="Kodi qe do besh share"
              onChange={(e) => setLink(e?.target?.value)}
              value={link}
              hideErrors
            />
            <Submit
              className="mt-0"
              buttonClassName="is-small h-full min-w-[100px]"
              isLoading={isSaving}
              onSubmit={onSave}
              title="Save"
              isDisabled={!link || link === affiliateLink?.Code}
            />
          </div>
          {affiliateLink?.Id && (
            <span
              onClick={() => {
                fireReduxAction(THROW_ALERT, {
                  type: INFO,
                  message: "Linku u kopjua, mund ta shperndash me miqte tuaj!",
                });
                copyToClipboard(linkToShare);
              }}
              className="w-max cursor-pointer hover:text-secondary-600 transition-all items-center flex gap-2"
            >
              {linkToShare}{" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
              </svg>
            </span>
          )}
        </div>
      </div>
    </Section>
  );
};

const countLabelsMap = {
  Delivered: "Te dorezuara",
  Approved: "Te approvuara",
  Confirmed: "Te konfirmuara",
  WaitingConfirmation: "Te pa perfunduara",
  Returned: "Te kthyera",
  Canceled: "Te anuluara",
};

export default Profili;
