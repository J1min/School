import QuoteListView from "@/components/atom/QuoteListView";
import Title from "@/components/atom/Title";
import QuoteAllPageLayout from "@/layout/QuoteAllPageLayout";
import { useAllQuote } from "@/model/quote";

export default function QuoteAllPage() {
  const { list: quoteList } = useAllQuote();
  return (
    <QuoteAllPageLayout
      title={<Title>모든 명언 조회</Title>}
      app={<QuoteListView quoteList={quoteList} />}
    />
  );
}
