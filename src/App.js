// BoostBot AI Web App - MVP

import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Textarea } from "@/components/ui/textarea";

export default function BoostBotApp() { const [input, setInput] = useState(""); const [tone, setTone] = useState("friendly"); const [goal, setGoal] = useState("promote a product"); const [output, setOutput] = useState("");

const generateContent = async () => { const response = await fetch("/api/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ input, tone, goal }) }); const data = await response.json(); setOutput(data.result); };

return ( <div className="max-w-2xl mx-auto p-4 space-y-4"> <h1 className="text-2xl font-bold text-center">BoostBot AI</h1> <Card> <CardContent className="space-y-3"> <Input placeholder="What is your business or product about?" value={input} onChange={(e) => setInput(e.target.value)} /> <Input placeholder="Tone (e.g. professional, funny, friendly)" value={tone} onChange={(e) => setTone(e.target.value)} /> <Input placeholder="Goal (e.g. promote, engage, inform)" value={goal} onChange={(e) => setGoal(e.target.value)} /> <Button onClick={generateContent} className="w-full"> Generate Content </Button> </CardContent> </Card> {output && ( <Card> <CardContent> <Textarea value={output} rows={8} readOnly className="w-full" /> </CardContent> </Card> )} </div> ); }

