import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JsonDataTable from "./json-data-table";
export default function JsonEditor() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Saved JSON Data</CardTitle>
          <CardDescription>View and Share your JSON data.</CardDescription>
        </CardHeader>
        <CardContent>
          <JsonDataTable/>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>{" "}
    </div>
  );
  
}
