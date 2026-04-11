"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_MAKE_WEBHOOK || "";

const steps = [
  { id: "about", title: "About You" },
  { id: "business", title: "Your Business" },
  { id: "project", title: "Your Project" },
];

interface FormData {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  currentWebsite: string;
  budget: string;
  projectDescription: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const AuditMultistepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
    currentWebsite: "",
    budget: "",
    projectDescription: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((p) => p + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((p) => p - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1:
        return (
          formData.businessName.trim() !== "" &&
          formData.businessType !== "" &&
          formData.currentWebsite !== ""
        );
      case 2:
        return formData.budget !== "";
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(false);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Bad response");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg mx-auto py-8"
      >
        <Card className="border shadow-md rounded-3xl overflow-hidden">
          <CardContent className="py-16 text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-[#00c47a]/10 flex items-center justify-center mx-auto"
            >
              <Check className="w-8 h-8 text-[#00c47a]" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground">You&apos;re all set!</h3>
            <p className="text-muted-foreground">
              Thanks! We&apos;ll send your free audit within 48 hours.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto py-8">
      {/* Progress indicator */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={cn(
                  "w-4 h-4 rounded-full cursor-pointer transition-colors duration-300",
                  index < currentStep
                    ? "bg-[#00c47a]"
                    : index === currentStep
                      ? "bg-[#00c47a] ring-4 ring-[#00c47a]/20"
                      : "bg-muted",
                )}
                onClick={() => {
                  if (index <= currentStep) setCurrentStep(index);
                }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.span
                className={cn(
                  "text-xs mt-1.5 hidden sm:block",
                  index === currentStep
                    ? "text-[#00c47a] font-medium"
                    : "text-muted-foreground",
                )}
              >
                {step.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-[#00c47a]"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border shadow-md rounded-3xl overflow-hidden">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                {/* Step 1: About You */}
                {currentStep === 0 && (
                  <>
                    <CardHeader>
                      <CardTitle>About you</CardTitle>
                      <CardDescription>
                        Let&apos;s start with how to reach you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input
                          id="name"
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={(e) => updateFormData("name", e.target.value)}
                          className="transition-all duration-300 focus:ring-2 focus:ring-[#00c47a]/20 focus:border-[#00c47a]"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jane@yourbusiness.com"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="transition-all duration-300 focus:ring-2 focus:ring-[#00c47a]/20 focus:border-[#00c47a]"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 2: Your Business */}
                {currentStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle>Your business</CardTitle>
                      <CardDescription>
                        Tell us about your company.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="businessName">Business name</Label>
                        <Input
                          id="businessName"
                          placeholder="e.g. The Coffee Room"
                          value={formData.businessName}
                          onChange={(e) => updateFormData("businessName", e.target.value)}
                          className="transition-all duration-300 focus:ring-2 focus:ring-[#00c47a]/20 focus:border-[#00c47a]"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="businessType">Business type</Label>
                        <Select
                          value={formData.businessType}
                          onValueChange={(value) => updateFormData("businessType", value)}
                        >
                          <SelectTrigger
                            id="businessType"
                            className="transition-all duration-300 focus:ring-2 focus:ring-[#00c47a]/20 focus:border-[#00c47a]"
                          >
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Restaurant">Restaurant</SelectItem>
                            <SelectItem value="Salon/Barbershop">Salon / Barbershop</SelectItem>
                            <SelectItem value="Trades/Construction">Trades / Construction</SelectItem>
                            <SelectItem value="Health/Fitness">Health / Fitness</SelectItem>
                            <SelectItem value="E-commerce">E-commerce</SelectItem>
                            <SelectItem value="Agency/Consulting">Agency / Consulting</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="currentWebsite">Do you have a website?</Label>
                        <Select
                          value={formData.currentWebsite}
                          onValueChange={(value) => updateFormData("currentWebsite", value)}
                        >
                          <SelectTrigger
                            id="currentWebsite"
                            className="transition-all duration-300 focus:ring-2 focus:ring-[#00c47a]/20 focus:border-[#00c47a]"
                          >
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="No website">No website</SelectItem>
                            <SelectItem value="Yes but it's outdated">
                              Yes but it&apos;s outdated
                            </SelectItem>
                            <SelectItem value="Yes but I want a redesign">
                              Yes but I want a redesign
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 3: Your Project */}
                {currentStep === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle>Your project</CardTitle>
                      <CardDescription>
                        Help us understand what you need.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="budget">Budget range</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => updateFormData("budget", value)}
                        >
                          <SelectTrigger
                            id="budget"
                            className="transition-all duration-300 focus:ring-2 focus:ring-[#00c47a]/20 focus:border-[#00c47a]"
                          >
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="£500–£999">£500 – £999</SelectItem>
                            <SelectItem value="£1,000–£2,000">£1,000 – £2,000</SelectItem>
                            <SelectItem value="£2,000–£5,000">£2,000 – £5,000</SelectItem>
                            <SelectItem value="£5,000+">£5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="projectDescription">
                          Tell us about your project{" "}
                          <span className="text-muted-foreground font-normal">(optional)</span>
                        </Label>
                        <Textarea
                          id="projectDescription"
                          placeholder="Describe your goals, what you're building, or anything else we should know..."
                          value={formData.projectDescription}
                          onChange={(e) => updateFormData("projectDescription", e.target.value)}
                          className="min-h-[100px] transition-all duration-300 focus:ring-2 focus:ring-[#00c47a]/20 focus:border-[#00c47a]"
                        />
                      </motion.div>

                      {error && (
                        <p className="text-sm text-destructive text-center">
                          Something went wrong. Email us at{" "}
                          <a href="mailto:hello@atavo.co.uk" className="underline">
                            hello@atavo.co.uk
                          </a>
                        </p>
                      )}
                    </CardContent>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <CardFooter className="flex justify-between pt-6 pb-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-2xl border border-input bg-background px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-muted",
                    currentStep === 0 && "pointer-events-none opacity-50"
                  )}
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="button"
                  onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                  disabled={!isStepValid() || isSubmitting}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-2xl px-4 py-2 text-sm font-semibold transition-all duration-300",
                    "bg-[#00c47a] text-black hover:brightness-110",
                    (!isStepValid() || isSubmitting) && "pointer-events-none opacity-50"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : currentStep === steps.length - 1 ? (
                    <>
                      Submit <Check className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Next <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </motion.div>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      {/* Step indicator */}
      <motion.div
        className="mt-4 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
      </motion.div>
    </div>
  );
};

export default AuditMultistepForm;
