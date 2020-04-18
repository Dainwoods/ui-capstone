Axiom excl_mid : forall {P : Prop}, P \/ not P.

Lemma and_intro : forall {P Q : Prop}, P -> Q -> P /\ Q.
Proof. tauto. Qed.

Lemma and_elim_left : forall {P Q : Prop}, P /\ Q -> P.
Proof. tauto. Qed.

Lemma and_elim_right : forall {P Q : Prop}, P /\ Q -> Q.
Proof. tauto. Qed.

Lemma or_intro_left : forall {P Q : Prop}, P -> (P \/ Q).
Proof. tauto. Qed.

Lemma or_intro_right : forall {P Q : Prop}, Q -> (P \/ Q).
Proof. tauto. Qed.

Lemma or_elim : forall {P Q R : Prop}, (P \/ Q) -> (P -> R) -> (Q -> R) -> R.
Proof. tauto. Qed.

Lemma true_intro : True.
Proof. tauto. Qed.

Lemma false_elim : forall {P : Prop}, False -> P.
Proof. tauto. Qed.

Lemma impl_elim : forall {P Q : Prop}, P -> (P -> Q) -> Q.
Proof. tauto. Qed.

Lemma not_elim : forall {P : Prop}, (not P) -> P -> False.
Proof. tauto. Qed.

Lemma iff_intro : forall {P Q : Prop}, (P -> Q) -> (Q -> P) -> (P <-> Q).
Proof. tauto. Qed.

Lemma iff_elim_left : forall {P Q : Prop}, (P <-> Q) -> P -> Q.
Proof. tauto. Qed.

Lemma iff_elim_right : forall {P Q : Prop}, (P <-> Q) -> Q -> P.
Proof. tauto. Qed.

Lemma red_ad_absurdum : forall {P : Prop}, (~P -> False) -> P.
Proof. intros; destruct (@excl_mid P); tauto. Qed.

(* Disable automation tactics by routing to fail. *)
Tactic Notation "auto" := fail.
Tactic Notation "auto" int_or_var(n) := fail.
Tactic Notation "auto" "with" ne_ident_list(hs) := fail.
Tactic Notation "auto" "with" "*" := fail.
Tactic Notation "auto" "using" ne_reference_list(qs) "with" ne_ident_list(hs) := fail.
Tactic Notation "auto" "using" ne_reference_list(qs) := fail.
Tactic Notation "info_auto" := fail.
Tactic Notation "debug auto" := fail.
Tactic Notation "tauto" := fail.
Tactic Notation "eauto" := fail.
Tactic Notation "intuition" := fail.
Tactic Notation "intuition" tactic(x) := fail.
Tactic Notation "firstorder" tactic(x) := fail.
(* Provide tactic notation for natded rules.
   Ironically, the rules are taken from the Lean page.
   https://leanprover.github.io/logic_and_proof/natural_deduction_for_propositional_logic.html *)
Tactic Notation "/\I" := eapply and_intro.
Tactic Notation "/\E__l" := eapply and_elim_left.
Tactic Notation "/\E__r" := eapply and_elim_right.
Tactic Notation "\/E" := eapply or_elim.
Tactic Notation "\/I__l" := eapply or_intro_left.
Tactic Notation "\/I__r" := eapply or_intro_right.
Tactic Notation "=>I" := intros.
Tactic Notation "=>E" := eapply impl_elim.
Tactic Notation "~I" := unfold not; intro.
Tactic Notation "~E" := eapply not_elim.
Tactic Notation "<->I" := eapply iff_intro.
Tactic Notation "<->E__l" := eapply iff_elim_left.
Tactic Notation "<->E__r" := eapply iff_elim_right.
Tactic Notation "RAA" := eapply red_ad_absurdum.
Tactic Notation "tI" := eapply true_intro.
Tactic Notation "fE" := eapply false_elim.


Variable A B C : Prop.
(*----------------- End Support Code -----------------*)

Lemma and_commutes : A /\ B <-> B /\ A.
Proof.
  <->I.
   =>I. /\I.
    /\E__r. exact H.
    /\E__l. exact H.
   =>I. /\I.
    /\E__r. exact H.
    /\E__l. exact H.
Qed.

Lemma or_commutes : A \/ B <-> B \/ A.
Proof.
   <->I.
     -=>I. 
        \/E. exact H.
         *=>I. \/I__r. exact H0. 
         *=>I. \/I__l. exact H0.
     -=>I. 
       \/E. exact H.
         *=>I. \/I__r. exact H0. 
         *=>I. \/I__l. exact H0.
Qed.


Lemma not_and_deduce : ~(A /\ B) -> A -> ~B.
Proof.
  =>I. 
  +~I. 
    *~E. exact H. 
      /\I. exact H0. exact H1.  
Qed.


Lemma contrapositive : (A -> B) -> ~B -> ~A.
Proof.
  ~I.
    =>I. =>E. 
    =>E. exact H1. exact H. exact H0.
Qed.


Lemma prop_resolution : (A \/ ~B) /\ (B \/ C) -> A \/ C.
Proof.
   +=>I.  \/E. 
     */\E__r. exact H.
     *=>I. \/I__l. \/E. 
       -/\E__l. exact H.
       -=>I. exact H1.
       -=>I. fE. ~E. exact H1. exact H0.
     *=>I. \/I__r. exact H0.
Qed.

